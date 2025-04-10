
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExternalLink, Play, Bell, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const YouTube = () => {
  // Sample YouTube videos
  const featuredVideos = [
    {
      id: 1,
      title: "Spring Collection 2024 Lookbook",
      thumbnail: "https://images.unsplash.com/photo-1523194258983-4998f759eda2?auto=format&fit=crop&w=600&q=80",
      duration: "12:45",
      views: "124K",
      date: "2 weeks ago"
    },
    {
      id: 2,
      title: "5 Ways to Style a White T-Shirt",
      thumbnail: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
      duration: "8:27",
      views: "67K",
      date: "1 month ago"
    },
    {
      id: 3,
      title: "Behind the Scenes: Our Sustainable Manufacturing",
      thumbnail: "https://images.unsplash.com/photo-1485179131449-2c03f933bdd8?auto=format&fit=crop&w=600&q=80",
      duration: "15:32",
      views: "42K",
      date: "2 months ago"
    }
  ];

  const popularPlaylists = [
    {
      id: 1,
      title: "Styling Tips & Tutorials",
      videos: 24,
      thumbnail: "https://images.unsplash.com/photo-1598300188259-626ca9b2b8e4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Fashion Zone Hauls & Reviews",
      videos: 18,
      thumbnail: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Seasonal Trends & Forecasts",
      videos: 12,
      thumbnail: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-[#FF0000] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Play fill="#FF0000" className="h-10 w-10 text-[#FF0000] ml-1" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Fashion Zone on YouTube</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Subscribe to our channel for styling tips, fashion lookbooks, behind-the-scenes content, and more
            </p>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center bg-white text-[#FF0000] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit Our YouTube Channel
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Videos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredVideos.map(video => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <Play fill="#FF0000" className="h-8 w-8 text-[#FF0000] ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Playlists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {popularPlaylists.map(playlist => (
              <Card key={playlist.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={playlist.thumbnail} 
                    alt={playlist.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-bold text-xl mb-1">{playlist.videos}</p>
                      <p className="text-sm">videos</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">{playlist.title}</h3>
                  <a href="#" className="text-[#FF0000] text-sm hover:underline">View playlist</a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=1000&q=80" 
                    alt="Latest video thumbnail"
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <Play fill="#FF0000" className="h-10 w-10 text-[#FF0000] ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">Our Latest Video</h3>
                <h4 className="text-xl mb-4">Summer 2024 Collection Preview: Beach to Street Style</h4>
                <p className="text-gray-600 mb-6">
                  Get an exclusive first look at our upcoming Summer Collection, featuring versatile pieces that transition effortlessly from beach days to city nights. Our design team walks you through the inspiration, materials, and styling tips.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <span className="mr-4">238K views</span>
                  <span className="mr-4">Premiered 3 days ago</span>
                  <span className="flex items-center"><ThumbsUp className="h-4 w-4 mr-1" /> 12K</span>
                </div>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#FF0000] hover:bg-[#CC0000]">
                    <Play className="mr-2 h-4 w-4" fill="white" />
                    Watch Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Never Miss a Video</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Subscribe to our channel and turn on notifications to stay updated with our latest fashion videos, styling tips, and behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#FF0000] hover:bg-[#CC0000]">
                  Subscribe to Our Channel
                </Button>
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Bell className="mr-2 h-5 w-5" />
                  Turn On Notifications
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default YouTube;
