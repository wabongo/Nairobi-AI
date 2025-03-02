import { User } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-2">
          Manage your profile, activities, and connections.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
        <User className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Sign In Required</h2>
        <p className="text-muted-foreground max-w-md mb-6">
          Please sign in to access your profile and account settings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Sign In
          </button>
          <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
