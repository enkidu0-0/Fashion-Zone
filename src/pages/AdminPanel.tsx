
import React, { useState, useEffect } from "react";
import { 
  BarChart3, 
  ShoppingBag, 
  Users, 
  Truck, 
  Tags, 
  FileText, 
  Settings,
  AreaChart,
  Package,
  Clock,
  AlertCircle,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Search,
  Filter,
  Calendar,
  RefreshCw,
  Download,
  ChevronLeft,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [accessLogs, setAccessLogs] = useState<{time: string; device: string; ip: string}[]>([]);
  
  useEffect(() => {
    // Simulate access logs data
    setAccessLogs([
      { time: "2025-04-04 09:23:12", device: "Windows 11 - Chrome 123.0.6312.58", ip: "192.168.1.105" },
      { time: "2025-04-03 17:45:33", device: "macOS Sonoma - Safari 17.3", ip: "192.168.1.102" },
      { time: "2025-04-03 14:12:08", device: "iPhone 15 - iOS 17.4", ip: "192.168.1.120" },
      { time: "2025-04-02 11:33:27", device: "Android 14 - Chrome Mobile", ip: "192.168.1.110" },
      { time: "2025-04-02 08:57:19", device: "Windows 11 - Firefox 115", ip: "192.168.1.105" },
    ]);

    // Record current access
    const now = new Date();
    const formattedTime = now.toISOString().replace('T', ' ').substring(0, 19);
    const currentDevice = `${navigator.platform} - ${navigator.userAgent.split(' ').slice(-1)[0]}`;
    
    setAccessLogs(prev => [
      { time: formattedTime, device: currentDevice, ip: "Current Session" },
      ...prev
    ]);
  }, []);

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Daily Orders</p>
            <h3 className="text-2xl font-bold mt-2">142</h3>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span>12% from yesterday</span>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-full">
            <ShoppingBag className="w-6 h-6 text-flipkart-blue" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Revenue Today</p>
            <h3 className="text-2xl font-bold mt-2">₹86,429</h3>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span>8% from yesterday</span>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Active Users</p>
            <h3 className="text-2xl font-bold mt-2">2,845</h3>
            <div className="flex items-center mt-2 text-sm text-red-600">
              <ArrowDown className="w-4 h-4 mr-1" />
              <span>3% from yesterday</span>
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-full">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Pending Deliveries</p>
            <h3 className="text-2xl font-bold mt-2">36</h3>
            <div className="flex items-center mt-2 text-sm text-yellow-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>5 delayed</span>
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-full">
            <Truck className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Orders requiring attention */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Orders Requiring Attention</h3>
          <Button variant="outline" size="sm" className="text-xs">View All</Button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <div>
                <p className="text-sm font-medium">Order #45912 - Payment Failed</p>
                <p className="text-xs text-gray-500">Customer: Ravi Sharma</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-xs">Resolve</Button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-md">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-yellow-500 mr-2" />
              <div>
                <p className="text-sm font-medium">Order #45890 - Delivery Delayed</p>
                <p className="text-xs text-gray-500">Estimated: 2 days overdue</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-xs">Track</Button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-md">
            <div className="flex items-center">
              <Package className="w-5 h-5 text-orange-500 mr-2" />
              <div>
                <p className="text-sm font-medium">Order #45901 - Return Requested</p>
                <p className="text-xs text-gray-500">Reason: Size doesn't match</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-xs">Process</Button>
          </div>
        </div>
      </div>
      
      {/* Sales Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-medium">Sales Analytics</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-xs">Weekly</Button>
            <Button variant="outline" size="sm" className="text-xs bg-gray-100">Monthly</Button>
            <Button variant="outline" size="sm" className="text-xs">Yearly</Button>
          </div>
        </div>
        <div className="h-48 flex items-center justify-center">
          {/* Placeholder for chart */}
          <div className="w-full h-full bg-gray-50 rounded-md flex items-center justify-center">
            <AreaChart className="w-12 h-12 text-gray-300" />
            <span className="ml-2 text-gray-400">Sales Chart Visualization</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Products</h2>
          <Button className="bg-flipkart-blue">Add New Product</Button>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search products..." 
              className="pl-10" 
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <RefreshCw className="w-4 h-4" />
                  <span>Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Bulk Edit</DropdownMenuItem>
                <DropdownMenuItem>Export CSV</DropdownMenuItem>
                <DropdownMenuItem>Delete Selected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input type="checkbox" className="rounded" />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({length: 5}).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <input type="checkbox" className="rounded" />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded"></div>
                  <div>
                    <p className="font-medium">Men's Casual Shirt</p>
                    <p className="text-gray-500 text-xs">SKU: PRD-{1000 + i}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Men's Clothing</TableCell>
              <TableCell>₹1,{599 + i * 100}</TableCell>
              <TableCell>{50 - i * 10}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 text-xs rounded-full ${i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {i % 2 === 0 ? 'Active' : 'Low Stock'}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm" className="text-red-500">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-5 of 124 products</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm" className="bg-flipkart-blue text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
  
  const renderOrders = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Orders</h2>
          <Button className="bg-flipkart-blue">Export Orders</Button>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search orders by ID, customer..." 
              className="pl-10" 
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="w-4 h-4" />
              <span>Status</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </Button>
          </div>
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input type="checkbox" className="rounded" />
            </TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({length: 5}).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <input type="checkbox" className="rounded" />
              </TableCell>
              <TableCell className="font-medium">
                #ORD-{45900 + i}
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">
                    {["Ravi Sharma", "Priya Patel", "Amit Kumar", "Neha Singh", "Vikram Mehta"][i]}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {["ravi@example.com", "priya@example.com", "amit@example.com", "neha@example.com", "vikram@example.com"][i]}
                  </p>
                </div>
              </TableCell>
              <TableCell>{`2025-04-${4 - i}`}</TableCell>
              <TableCell>₹{2599 + i * 1000}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  ["bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-purple-100 text-purple-800", "bg-red-100 text-red-800"][i]
                }`}>
                  {["Delivered", "Processing", "Shipped", "On Hold", "Canceled"][i]}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">View</Button>
                  <Button variant="outline" size="sm">Invoice</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-5 of 83 orders</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm" className="bg-flipkart-blue text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );

  const renderDelivery = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Delivery Management</h2>
          <Button className="bg-flipkart-blue">Add Delivery Personnel</Button>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search by delivery person or order ID" 
              className="pl-10" 
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="w-4 h-4" />
              <span>Area</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Date</span>
            </Button>
          </div>
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Delivery Person</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Current Load</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({length: 5}).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                  <div>
                    <p className="font-medium">
                      {["Rajesh Kumar", "Sunil Verma", "Mohan Singh", "Prakash Joshi", "Dinesh Gupta"][i]}
                    </p>
                    <p className="text-gray-500 text-xs">ID: DEL-{100 + i}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {["South Delhi", "Noida Sector 18", "Gurgaon", "East Delhi", "West Delhi"][i]}
              </TableCell>
              <TableCell>{[4, 7, 2, 5, 1][i]} orders</TableCell>
              <TableCell>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  ["bg-green-100 text-green-800", "bg-yellow-100 text-yellow-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"][i]
                }`}>
                  {["On Duty", "High Load", "On Break", "On Duty", "Off Duty"][i]}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {Array.from({length: 5}).map((_, starIndex) => (
                    <svg key={starIndex} className={`w-4 h-4 ${starIndex < 5-i ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">Assign Orders</Button>
                  <Button variant="outline" size="sm">Track</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-5 of 18 delivery personnel</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm" className="bg-flipkart-blue text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );

  const renderAccessLogs = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Access Logs</h2>
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>Export Logs</span>
          </Button>
        </div>
        <p className="text-gray-500 mt-2">Track when and where admin access occurred</p>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Device & Browser</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accessLogs.map((log, i) => (
            <TableRow key={i} className={i === 0 ? "bg-blue-50" : ""}>
              <TableCell>{log.time}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {i === 0 && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
                      Current
                    </span>
                  )}
                  {log.device}
                </div>
              </TableCell>
              <TableCell>{log.ip}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing most recent access logs</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Load More</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <Shield className="w-6 h-6 text-flipkart-blue mr-2" />
            <h2 className="font-bold text-lg">Admin Panel</h2>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab("dashboard")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "dashboard" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("products")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "products" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "orders" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Package className="w-5 h-5 mr-3" />
                  Orders
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("delivery")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "delivery" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Truck className="w-5 h-5 mr-3" />
                  Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("customers")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "customers" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Users className="w-5 h-5 mr-3" />
                  Customers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("promotions")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "promotions" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Tags className="w-5 h-5 mr-3" />
                  Promotions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("reports")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "reports" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FileText className="w-5 h-5 mr-3" />
                  Reports
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("access_logs")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "access_logs" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Clock className="w-5 h-5 mr-3" />
                  Access Logs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("settings")}
                  className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                    activeTab === "settings" 
                      ? "bg-flipkart-blue text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="ml-64 flex-1 p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <button 
                onClick={() => navigate('/')}
                className="text-flipkart-blue flex items-center text-sm mb-2"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Store
              </button>
              <h1 className="text-2xl font-bold">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "products" && "Product Management"}
                {activeTab === "orders" && "Order Management"}
                {activeTab === "delivery" && "Delivery Management"}
                {activeTab === "customers" && "Customer Management"}
                {activeTab === "promotions" && "Promotions & Marketing"}
                {activeTab === "reports" && "Reports & Analytics"}
                {activeTab === "access_logs" && "Access Logs"}
                {activeTab === "settings" && "Settings"}
              </h1>
              <p className="text-gray-500">
                {activeTab === "dashboard" && "Overview of your store's performance"}
                {activeTab === "products" && "Manage your product catalog"}
                {activeTab === "orders" && "View and manage customer orders"}
                {activeTab === "delivery" && "Track and manage deliveries"}
                {activeTab === "customers" && "Manage your customer database"}
                {activeTab === "promotions" && "Create and manage promotional campaigns"}
                {activeTab === "reports" && "View detailed analytics and reports"}
                {activeTab === "access_logs" && "Track admin access history"}
                {activeTab === "settings" && "Configure your store settings"}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Bell className="w-4 h-4" />
                  <span>Notifications</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>

          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "products" && renderProducts()}
          {activeTab === "orders" && renderOrders()}
          {activeTab === "delivery" && renderDelivery()}
          {activeTab === "access_logs" && renderAccessLogs()}
          {activeTab === "customers" && (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Users className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">Customer Management</h3>
              <p className="text-gray-500 mb-4">This section is under development</p>
              <Button className="bg-flipkart-blue">Coming Soon</Button>
            </div>
          )}
          {activeTab === "promotions" && (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Tags className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">Promotions & Marketing</h3>
              <p className="text-gray-500 mb-4">This section is under development</p>
              <Button className="bg-flipkart-blue">Coming Soon</Button>
            </div>
          )}
          {activeTab === "reports" && (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">Reports & Analytics</h3>
              <p className="text-gray-500 mb-4">This section is under development</p>
              <Button className="bg-flipkart-blue">Coming Soon</Button>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Settings className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">Settings</h3>
              <p className="text-gray-500 mb-4">This section is under development</p>
              <Button className="bg-flipkart-blue">Coming Soon</Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
