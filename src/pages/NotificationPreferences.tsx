
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Bell, Mail, Phone, Tag, Truck, Gift, CreditCard, Megaphone } from 'lucide-react';

const NotificationPreferences = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Notification Preferences</h1>
            <p className="text-gray-600">
              Manage how you want to be notified about your orders, promotions, and more.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-flipkart-blue" />
                  Email Notifications
                </CardTitle>
                <CardDescription>
                  Manage notifications sent to your email address
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-gray-500">Get notifications about your order status</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </li>
                  <li className="flex items-center justify-between py-2 border-t">
                    <div className="flex items-center gap-3">
                      <Tag className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Promotions & Discounts</p>
                        <p className="text-sm text-gray-500">Receive information about sales and special offers</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </li>
                  <li className="flex items-center justify-between py-2 border-t">
                    <div className="flex items-center gap-3">
                      <Gift className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Personalized Recommendations</p>
                        <p className="text-sm text-gray-500">Product suggestions based on your preferences</p>
                      </div>
                    </div>
                    <Switch />
                  </li>
                  <li className="flex items-center justify-between py-2 border-t">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Payment Confirmations</p>
                        <p className="text-sm text-gray-500">Receive receipts when payments are processed</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-flipkart-blue" />
                  SMS Notifications
                </CardTitle>
                <CardDescription>
                  Manage notifications sent to your phone via text message
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Delivery Updates</p>
                        <p className="text-sm text-gray-500">Get SMS notifications when your order ships and delivers</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </li>
                  <li className="flex items-center justify-between py-2 border-t">
                    <div className="flex items-center gap-3">
                      <Tag className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Limited Time Offers</p>
                        <p className="text-sm text-gray-500">Flash sales and time-sensitive deals</p>
                      </div>
                    </div>
                    <Switch />
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-flipkart-blue" />
                  Push Notifications
                </CardTitle>
                <CardDescription>
                  Manage notifications in your web browser
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Order Status</p>
                        <p className="text-sm text-gray-500">Get real-time updates about your orders</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </li>
                  <li className="flex items-center justify-between py-2 border-t">
                    <div className="flex items-center gap-3">
                      <Tag className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Price Drops</p>
                        <p className="text-sm text-gray-500">Notifications when items in your wishlist go on sale</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </li>
                  <li className="flex items-center justify-between py-2 border-t">
                    <div className="flex items-center gap-3">
                      <Megaphone className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Back In Stock</p>
                        <p className="text-sm text-gray-500">Get notified when out-of-stock items become available</p>
                      </div>
                    </div>
                    <Switch />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationPreferences;
