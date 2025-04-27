import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { migrateToSupabase } from '@/utils/migrateToSupabase';
import { Loader2 } from 'lucide-react';

const MigrateData = () => {
  const [isMigrating, setIsMigrating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleMigration = async () => {
    setIsMigrating(true);
    try {
      const result = await migrateToSupabase();
      
      if (result.success) {
        toast({
          title: "Migration Successful",
          description: "All data has been transferred to Supabase",
        });
        // Clear localStorage after successful migration
        localStorage.clear();
        // Keep the user logged in
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/admin');
      } else {
        toast({
          title: "Migration Failed",
          description: "There was an error migrating the data",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Migration Failed",
        description: "There was an error migrating the data",
        variant: "destructive",
      });
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Data Migration</h1>
        <p className="text-gray-600 mb-6">
          This will migrate all your existing data from localStorage to Supabase database.
          This process cannot be undone.
        </p>
        
        <div className="space-y-4">
          <Button
            onClick={handleMigration}
            className="w-full"
            disabled={isMigrating}
          >
            {isMigrating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Migrating Data...
              </>
            ) : (
              'Start Migration'
            )}
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate('/admin')}
            disabled={isMigrating}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MigrateData; 