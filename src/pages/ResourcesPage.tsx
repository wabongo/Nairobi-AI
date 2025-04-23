import { Book } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Resources</h1>
        <p className="text-muted-foreground mt-2">
          Browse our collection of AI resources, tutorials, research papers, and more.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
        <Book className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Resources Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          We're currently building our resource library. Check back soon for tutorials, research papers, and other learning materials.
        </p>
      </div>
    </div>
  );
};

export default ResourcesPage;
