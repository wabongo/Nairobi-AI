import { Code } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-2">
          Explore AI projects from the community and showcase your own work.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
        <Code className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Projects Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          We're building a platform to showcase AI projects from our community. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
