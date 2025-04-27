import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Clock, Check, X, Eye, Download, MessageSquare } from 'lucide-react';

const Orders = () => {
  const orders = [];  // Removed dummy data

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'In Transit':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'Cancelled':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-amber-100 text-amber-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold mb-6">My Orders</h1>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map(order => (
                    <Card key={order.id} className="overflow-hidden">
                      <div className="p-4 bg-gray-50 border-b flex flex-wrap justify-between items-center gap-2">
                        <div>
                          <p className="text-sm text-gray-500">Order placed</p>
                          <p className="font-medium">{new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Order ID</p>
                          <p className="font-medium">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total</p>
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(order.status)}
                              {order.status}
                            </span>
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Delivery Address</p>
                            <p className="font-medium">{order.address}</p>
                          </div>
                          <div className="mt-3 sm:mt-0">
                            <p className="text-sm text-gray-500">Items</p>
                            <p className="font-medium">{order.items} {order.items === 1 ? 'item' : 'items'}</p>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="px-4 py-3 bg-gray-50 border-t flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Eye className="h-4 w-4" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" />
                          Invoice
                        </Button>
                        {order.status !== 'Cancelled' && (
                          <Button variant="outline" size="sm" className="gap-1">
                            <MessageSquare className="h-4 w-4" />
                            Help
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No orders found</h3>
                  <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
                  <Button asChild>
                    <a href="/">Continue Shopping</a>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="processing" className="mt-4">
              <div className="text-center py-12">
                <Clock className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No processing orders</h3>
                <p className="text-gray-500 mb-6">You don't have any orders being processed right now.</p>
                <Button asChild>
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="shipped" className="mt-4">
              <div className="text-center py-12">
                <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No orders in transit</h3>
                <p className="text-gray-500 mb-6">You don't have any orders being shipped right now.</p>
                <Button asChild>
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="delivered" className="mt-4">
              <div className="text-center py-12">
                <Check className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No delivered orders</h3>
                <p className="text-gray-500 mb-6">You don't have any delivered orders to display.</p>
                <Button asChild>
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="cancelled" className="mt-4">
              <div className="text-center py-12">
                <X className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No cancelled orders</h3>
                <p className="text-gray-500 mb-6">You don't have any cancelled orders to display.</p>
                <Button asChild>
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
