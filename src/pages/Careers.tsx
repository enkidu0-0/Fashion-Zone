
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  // Sample job listings
  const jobs = [
    {
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Fashion Buyer",
      department: "Merchandising",
      location: "New York",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Contract"
    },
    {
      title: "Customer Support Specialist",
      department: "Customer Service",
      location: "Chicago",
      type: "Full-time"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl max-w-2xl">
              Build your career with Fashion Zone and be part of a team that's revolutionizing online shopping
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold mb-8">Why Work With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Great Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Work with passionate professionals who are the best in the industry</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <GraduationCap className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Growth & Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Continuous learning opportunities and clear career growth paths</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Briefcase className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Flexible work arrangements and generous time off policies</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive health benefits, retirement plans, and more</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-5 bg-gray-100 p-4 font-semibold">
              <div className="col-span-2">Position</div>
              <div>Department</div>
              <div>Location</div>
              <div>Type</div>
            </div>
            {jobs.map((job, index) => (
              <div key={index} className={`grid grid-cols-5 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                <div className="col-span-2 font-medium text-flipkart-blue">{job.title}</div>
                <div>{job.department}</div>
                <div>{job.location}</div>
                <div>{job.type}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="mb-4">Don't see a position that matches your skills?</p>
            <a href="mailto:careers@fashionzone.com" className="bg-flipkart-blue text-white px-6 py-3 rounded inline-block hover:bg-blue-700 transition-colors">
              Send us your resume
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
