import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Phone, Lock, X, Store } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getAndClearReturnPath } from "@/utils/auth";

// Form validation schemas
const phoneSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(10, "Phone number must not exceed 10 digits"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const userDetailsSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userPhone, setUserPhone] = useState("");

  // Phone number form
  const phoneForm = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  // OTP form
  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // User details form
  const userDetailsForm = useForm<z.infer<typeof userDetailsSchema>>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  // Handle phone number submission
  const onPhoneSubmit = (values: z.infer<typeof phoneSchema>) => {
    setUserPhone(values.phone);
    setStep(2); // Move to OTP step
    
    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to ${values.phone}`,
    });
  };

  // Handle OTP verification
  const onOtpSubmit = (values: z.infer<typeof otpSchema>) => {
    setStep(3); // Move to user details step
  };

  // Handle user details submission
  const onUserDetailsSubmit = (values: z.infer<typeof userDetailsSchema>) => {
    // Save the new user to local storage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "{}");
    existingUsers[userPhone] = {
      name: values.name,
      password: values.password,
      phone: userPhone,
      registeredAt: new Date().toISOString()
    };
    
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify({
      phone: userPhone,
      name: values.name
    }));
    
    toast({
      title: "Registration Successful",
      description: `Welcome to Fashion Zone, ${values.name}!`,
    });
    
    // Navigate to the return path or home
    const returnPath = getAndClearReturnPath();
    navigate(returnPath);
  };

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
            <h1 className="text-2xl font-bold">
              {step === 1 ? "Sign In" : 
               step === 2 ? "Verify OTP" : 
               "Create Account"}
            </h1>
            <p className="mt-1 text-sm opacity-80">
              {step === 1 ? "Enter your phone number to continue" : 
               step === 2 ? "Enter the 6-digit code sent to your phone" : 
               "Set up your account details"}
            </p>
          </div>
          
          <div className="p-6">
            {step === 1 && (
              <Form {...phoneForm}>
                <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-6">
                  <FormField
                    control={phoneForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <div className="relative flex">
                          <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                            +91
                          </div>
                          <div className="relative flex-1">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <FormControl>
                              <Input 
                                placeholder="10-digit mobile number" 
                                className="pl-10 rounded-l-none" 
                                {...field} 
                                type="tel" 
                                maxLength={10}
                              />
                            </FormControl>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-flipkart-orange hover:bg-flipkart-orange/90">
                    Continue
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-flipkart-blue font-medium hover:underline">
                      Login
                    </Link>
                  </div>
                </form>
              </Form>
            )}
            
            {step === 2 && (
              <Form {...otpForm}>
                <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-6">
                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel>Enter OTP</FormLabel>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-sm text-center">
                    <span className="text-gray-600">Didn't receive the OTP? </span>
                    <button type="button" className="text-flipkart-blue font-medium">Resend OTP</button>
                  </div>
                  <Button type="submit" className="w-full bg-flipkart-orange hover:bg-flipkart-orange/90">
                    Verify OTP
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setStep(1)}
                  >
                    Change Phone Number
                  </Button>
                </form>
              </Form>
            )}
            
            {step === 3 && (
              <Form {...userDetailsForm}>
                <form onSubmit={userDetailsForm.handleSubmit(onUserDetailsSubmit)} className="space-y-6">
                  <FormField
                    control={userDetailsForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
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
                    control={userDetailsForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <FormControl>
                            <Input 
                              type="password"
                              placeholder="Create a password" 
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
                    Create Account
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 