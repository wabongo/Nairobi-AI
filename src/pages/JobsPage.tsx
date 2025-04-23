import { Briefcase } from 'lucide-react';

const JobsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Jobs</h1>
        <p className="text-muted-foreground mt-2">
          Find AI-related job opportunities and talent in Nairobi and beyond.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
        <Briefcase className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Job Board Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          We're building a specialized job board for AI professionals. Check back soon to post or find opportunities.
        </p>
      </div>
    </div>
  );
};

export default JobsPage;
