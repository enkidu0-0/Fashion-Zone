import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Lock, X, Store } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getAndClearReturnPath } from "@/utils/auth";
import { isTOTPSetup } from "@/utils/totp";
import TOTPVerify from "@/components/admin/TOTPVerify";

const loginSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

interface UserData {
  name: string;
  password: string;
  phone: string;
  registeredAt: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showTOTPVerify, setShowTOTPVerify] = useState(false);
  const [pendingAdminLogin, setPendingAdminLogin] = useState<{name: string, phone: string} | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    // Get all users from local storage
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    
    // Find user by name
    const userEntry = Object.entries(users).find(([_, userData]) => 
      (userData as UserData).name.toLowerCase() === values.name.toLowerCase()
    );

    if (!userEntry) {
      toast({
        title: "Login Failed",
        description: "User not found. Please check your name or sign up.",
        variant: "destructive",
      });
      return;
    }

    const [phone, userData] = userEntry as [string, UserData];

    // Check password
    if (userData.password !== values.password) {
      toast({
        title: "Login Failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // If this is an admin login and 2FA is set up
    if (values.name.toLowerCase() === 'admin' && isTOTPSetup()) {
      setPendingAdminLogin({ name: userData.name, phone });
      setShowTOTPVerify(true);
      return;
    }

    // Regular user login or admin without 2FA
    completeLogin(userData.name, phone);
  };

  const completeLogin = (name: string, phone: string) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify({ phone, name }));
    
    toast({
      title: "Login Successful",
      description: `Welcome back, ${name}!`,
    });

    // Navigate to the return path or home
    const returnPath = getAndClearReturnPath();
    navigate(returnPath);
  };

  if (showTOTPVerify && pendingAdminLogin) {
    return (
      <div className="min-h-screen bg-flipkart-bg-light flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
            <TOTPVerify
              onVerified={() => {
                completeLogin(pendingAdminLogin.name, pendingAdminLogin.phone);
              }}
              onCancel={() => {
                setShowTOTPVerify(false);
                setPendingAdminLogin(null);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-flipkart-bg-light flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md overflow-hidden relative">
          <div className="flex justify-between items-center absolute top-4 right-4 left-4 z-10">
            <Link to="/" className="flex items-center gap-1 text-flipkart-blue hover:underline">
              <Store className="h-4 w-4" />
              <span className="text-sm">Back to Store</span>
            </Link>
            <Link 
              to="/" 
              className="p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </Link>
          </div>
          
          <div className="bg-flipkart-blue p-6 text-white pt-16">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="mt-1 text-sm opacity-80">
              Welcome back! Please enter your details
            </p>
          </div>
          
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <FormControl>
                          <Input 
                            type="password"
                            placeholder="Enter your password" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-flipkart-orange hover:bg-flipkart-orange/90">
                  Login
                </Button>
                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/signin" className="text-flipkart-blue font-medium hover:underline">
                    Sign In
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
