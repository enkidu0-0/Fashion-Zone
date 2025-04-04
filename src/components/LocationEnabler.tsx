
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const LocationEnabler = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if location permission has been asked before
    const locationAsked = localStorage.getItem("locationAsked");
    
    if (!locationAsked) {
      // Only show the dialog if it's the first visit
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  const handleAllowLocation = () => {
    setLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success handling
          const { latitude, longitude } = position.coords;
          
          // Store the coordinates in localStorage
          localStorage.setItem("userLocation", JSON.stringify({ latitude, longitude }));
          localStorage.setItem("locationAsked", "true");
          
          toast({
            title: "Location Access Granted",
            description: "We'll use your location to show relevant products and deals.",
          });
          
          setLoading(false);
          setOpen(false);
        },
        (error) => {
          // Error handling
          console.error("Error getting location:", error);
          
          toast({
            title: "Location access denied",
            description: "You can change this in your browser settings.",
            variant: "destructive",
          });
          
          localStorage.setItem("locationAsked", "true");
          setLoading(false);
          setOpen(false);
        }
      );
    } else {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support location services.",
        variant: "destructive",
      });
      
      localStorage.setItem("locationAsked", "true");
      setLoading(false);
      setOpen(false);
    }
  };

  const handleSkip = () => {
    localStorage.setItem("locationAsked", "true");
    setOpen(false);
    
    toast({
      title: "Location access skipped",
      description: "You can enable location access later from settings.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="text-flipkart-blue" />
            Enable Location Access
          </DialogTitle>
          <DialogDescription>
            Allow Fashion Zone to access your location for a personalized shopping experience, accurate delivery estimates, and local deals.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center my-4">
          <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-flipkart-blue" />
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleSkip} 
            className="sm:w-1/2"
          >
            Skip for Now
          </Button>
          <Button 
            onClick={handleAllowLocation} 
            className="sm:w-1/2 bg-flipkart-blue hover:bg-flipkart-blue/90"
            disabled={loading}
          >
            {loading ? "Getting Location..." : "Allow Location Access"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LocationEnabler;
