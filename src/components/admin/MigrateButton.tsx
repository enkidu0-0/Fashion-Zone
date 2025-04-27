import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { migrateToSupabase } from '@/utils/setupDatabase';
import { Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function MigrateButton() {
  const [isMigrating, setIsMigrating] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { toast } = useToast();

  const handleMigration = async () => {
    setIsMigrating(true);
    try {
      toast({
        title: "Migration Started",
        description: "Starting data migration to Supabase...",
      });

      const result = await migrateToSupabase();
      
      if (result.success) {
        toast({
          title: "Migration Successful",
          description: "All data has been transferred to Supabase. The page will refresh to load the new data.",
        });
      } else {
        toast({
          title: "Migration Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Migration Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsMigrating(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setShowConfirm(true)} 
        disabled={isMigrating}
        variant="default"
      >
        {isMigrating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Migrating...
          </>
        ) : (
          'Migrate to Supabase'
        )}
      </Button>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will migrate all your local data to Supabase. This action cannot be undone.
              Make sure you have backed up any important data before proceeding.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isMigrating}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isMigrating}
              onClick={handleMigration}
            >
              {isMigrating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Migrating...
                </>
              ) : (
                'Continue'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
} 