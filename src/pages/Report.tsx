
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AlertTriangle, ShieldAlert, FileWarning } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Report = () => {
  const [reportType, setReportType] = useState("counterfeit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productLink: "",
    details: "",
    evidence: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the report data to the server
    toast({
      title: "Report submitted successfully",
      description: "We'll review your report and take appropriate action within 48 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      productLink: "",
      details: "",
      evidence: null
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Report Infringement</h1>
            <p className="text-xl max-w-3xl">
              Help us protect intellectual property rights and maintain the integrity of our marketplace
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold mb-4">What would you like to report?</h2>
              <Tabs defaultValue={reportType} onValueChange={setReportType} className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                  <TabsTrigger value="counterfeit">
                    <div className="flex items-center">
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      <span>Counterfeit Products</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="trademark">
                    <div className="flex items-center">
                      <FileWarning className="mr-2 h-4 w-4" />
                      <span>Trademark Violation</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="other">
                    <div className="flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      <span>Other Infringement</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="counterfeit" className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Report products that you believe are counterfeit or unauthorized replicas of authentic items. 
                    Please provide as much detail as possible, including product links and evidence of authenticity concerns.
                  </p>
                </TabsContent>
                <TabsContent value="trademark" className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Report unauthorized use of registered trademarks in product listings, descriptions, or images.
                    Please include details of the trademark registration and how it's being violated.
                  </p>
                </TabsContent>
                <TabsContent value="other" className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Report other intellectual property infringements such as copyright violations, patent infringements,
                    or misuse of proprietary designs or technology.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name">Your Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder="Enter your full name" 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="Enter your email address" 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number" 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="productLink">Product Link or Identifier</Label>
                <Input 
                  id="productLink" 
                  name="productLink"
                  value={formData.productLink}
                  onChange={handleInputChange}
                  required 
                  placeholder="Enter the URL or product ID of the reported item" 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="details">Description of Infringement</Label>
                <Textarea 
                  id="details" 
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  required 
                  placeholder="Please provide detailed information about the infringement" 
                  rows={5}
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="evidence">Upload Evidence (Optional)</Label>
                <Input id="evidence" type="file" className="cursor-pointer" />
                <p className="text-sm text-gray-500 mt-1">Max file size: 10MB. Supported formats: JPG, PNG, PDF</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button type="submit" className="flex-1">Submit Report</Button>
                <Button type="reset" variant="outline" className="flex-1">Reset Form</Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <ShieldAlert className="mr-2 h-5 w-5 text-flipkart-blue" />
              Our Commitment
            </h3>
            <p className="mb-4">
              Fashion Zone takes intellectual property rights very seriously. We're committed to removing infringing content quickly and maintaining a trustworthy marketplace for all users.
            </p>
            <p>
              Reports are typically reviewed within 2 business days, and we'll keep you updated on the status of your complaint via email.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
