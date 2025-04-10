
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExternalLink, Camera, Hash, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Instagram = () => {
  // Sample Instagram posts
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      likes: "5.2K",
      comments: "124",
      caption: "Summer vibes in our new floral maxi dress ☀️ #SummerStyle #NewArrivals"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
      likes: "3.8K",
      comments: "98",
      caption: "Casual elegance for your everyday look 🖤 #MinimalStyle #OOTD"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
      likes: "4.1K",
      comments: "87",
      caption: "Weekend ready in our bestselling denim 👖 #DenimLove #WeekendVibes"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80",
      likes: "6.7K",
      comments: "156",
      caption: "Business casual has never looked better ✨ #WorkwearStyle #MensStyle"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
      likes: "4.5K",
      comments: "112",
      caption: "Shopping therapy is real therapy 🛍️ #ShoppingSpree #FashionZoneHaul"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?auto=format&fit=crop&w=600&q=80",
      likes: "7.2K",
      comments: "203",
      caption: "Behind the scenes at our Spring photoshoot 📸 #BTS #SpringCollection"
    }
  ];

  // Popular hashtags
  const popularHashtags = [
    "#FashionZoneStyle",
    "#OOTD",
    "#SummerLooks",
    "#FashionInspo",
    "#StyleTips",
    "#TrendAlert",
    "#FashionZoneLooks"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10 text-pink-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Fashion Zone on Instagram</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Follow us for style inspiration, exclusive behind-the-scenes content, and community features
            </p>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit Our Instagram
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">@FashionZone</h2>
              <div className="flex gap-6 text-gray-600">
                <div>
                  <span className="font-bold">845</span> posts
                </div>
                <div>
                  <span className="font-bold">125K</span> followers
                </div>
                <div>
                  <span className="font-bold">12</span> following
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-wrap gap-2 max-w-md">
                {popularHashtags.map((hashtag, index) => (
                  <Badge key={index} variant="outline" className="bg-white">
                    <Hash className="h-3 w-3 mr-1" />
                    {hashtag.substring(1)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {instagramPosts.map(post => (
              <Card key={post.id} className="overflow-hidden border-none shadow-none">
                <div className="relative group">
                  <img 
                    src={post.image} 
                    alt="Instagram post"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <Heart fill="white" className="h-5 w-5 mr-2" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.656 17.008a9.993 9.993 0 0 1-3.59 3.615L12 24v-4.024A10.004 10.004 0 0 1 2 10C2 4.477 6.477 0 12 0s10 4.477 10 10c0 2.568-.968 4.913-2.56 6.683l1.216.325z" />
                        </svg>
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <p className="mt-4 px-4 text-sm text-center line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Instagram Stories</h3>
            <div className="flex overflow-x-auto pb-4 gap-4">
              {[
                { name: "New In", image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?auto=format&fit=crop&w=200&q=80" },
                { name: "Summer", image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&fit=crop&w=200&q=80" },
                { name: "Styling Tips", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80" },
                { name: "Sale", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=200&q=80" },
                { name: "Accessories", image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=200&q=80" },
                { name: "BTS", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" }
              ].map((story, index) => (
                <div key={index} className="flex flex-col items-center min-w-[100px]">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[2px]">
                    <div className="w-full h-full bg-white rounded-full p-[2px]">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium">{story.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Join Our Instagram Community</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Follow us on Instagram to be featured, get style inspiration, and be the first to see our latest collections.
            </p>
            <div className="space-y-6">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500">
                  <Camera className="mr-2 h-5 w-5" />
                  Follow @FashionZone
                </Button>
              </a>
              <div>
                <p className="text-gray-500">Tag us in your photos with</p>
                <p className="font-bold text-lg mt-2">#FashionZoneStyle</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Instagram;
