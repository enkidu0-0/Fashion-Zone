import { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  X, 
  Send, 
  Loader2 
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome',
    content: 'Hello! Welcome to Fashion Zone customer support. How can I help you today?',
    sender: 'bot',
    timestamp: new Date()
  }
];

const AUTO_RESPONSES: Record<string, string> = {
  shipping: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days at an additional cost.",
  return: "Our return policy allows items to be returned within 30 days of delivery for a full refund. Items must be unworn with tags attached.",
  size: "You can find our size guide on each product page. If you're between sizes, we generally recommend sizing up for a more comfortable fit.",
  payment: "We accept all major credit cards, PayPal, and Fashion Zone gift cards. All transactions are secure and encrypted.",
  track: "You can track your order by going to My Orders section in your account, or using the tracking link sent in your shipping confirmation email.",
  cancel: "You can cancel your order within 1 hour of placing it through your account. After that, please contact customer service.",
  exchange: "To exchange an item, please return it and place a new order. This ensures you get the item you want before it sells out.",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getAutoResponse(input.toLowerCase());
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAutoResponse = (query: string): string => {
    if (query.includes("shipping") || query.includes("delivery")) {
      return AUTO_RESPONSES.shipping;
    } else if (query.includes("return") || query.includes("refund")) {
      return AUTO_RESPONSES.return;
    } else if (query.includes("size") || query.includes("fit")) {
      return AUTO_RESPONSES.size;
    } else if (query.includes("payment") || query.includes("pay")) {
      return AUTO_RESPONSES.payment;
    } else if (query.includes("track") || query.includes("where is my order")) {
      return AUTO_RESPONSES.track;
    } else if (query.includes("cancel") || query.includes("stop order")) {
      return AUTO_RESPONSES.cancel;
    } else if (query.includes("exchange")) {
      return AUTO_RESPONSES.exchange;
    } else {
      return "I'm not sure I understand your question. Could you please rephrase or ask about our shipping, returns, payment methods, or order tracking?";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const ChatContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                msg.sender === 'user' 
                  ? 'bg-flipkart-blue text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.content}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-left mb-4">
            <div className="inline-block rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button 
              variant="default" 
              size="icon"
              className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-flipkart-blue hover:bg-blue-600"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[85vh]">
            <div className="px-4 py-3 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Customer Support</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="h-full overflow-hidden">
              <ChatContent />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="default" 
              size="icon"
              className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-flipkart-blue hover:bg-blue-600"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-md h-[500px]">
            <DialogHeader>
              <DialogTitle>Customer Support</DialogTitle>
            </DialogHeader>
            <div className="h-full overflow-hidden">
              <ChatContent />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ChatBot;
