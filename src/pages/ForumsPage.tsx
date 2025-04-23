import { MessageSquare } from 'lucide-react';

const ForumsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Forums</h1>
        <p className="text-muted-foreground mt-2">
          Engage in discussions with the AI community in Nairobi and beyond.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
        <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Forums Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          Our community forums are coming soon. Join us to discuss AI topics, ask questions, and share knowledge.
        </p>
      </div>
    </div>
  );
};

export default ForumsPage;
