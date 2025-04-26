// React is automatically imported by JSX transform
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Flame,
  PlusCircle,
  Search as SearchIcon,
  Filter as FilterIcon,
  Eye,
  Clock,
  Tag as TagIcon,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Dummy categories
const categories = [
  { id: 1, name: 'General', threads: 48 },
  { id: 2, name: 'Research', threads: 32 },
  { id: 3, name: 'Announcements', threads: 12 },
  { id: 4, name: 'Projects', threads: 27 },
  { id: 5, name: 'Jobs & Internships', threads: 9 }
];

// Dummy threads data
const threads = [
  {
    id: 101,
    title: 'What are the best resources to learn generative AI in 2025?',
    category: 'General',
    tags: ['Learning', 'Generative AI'],
    replies: 14,
    views: 582,
    author: {
      name: 'Amina Kiptoo',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    lastActivity: '2h ago',
    trending: true
  },
  {
    id: 102,
    title: 'Share your experience using Open-Source LLMs in production',
    category: 'Projects',
    tags: ['LLM', 'Open Source'],
    replies: 23,
    views: 1123,
    author: {
      name: 'Kigen Otieno',
      avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
    },
    lastActivity: '5h ago',
    trending: true
  },
  {
    id: 103,
    title: 'Call for Papers: AI for Agriculture Conference',
    category: 'Announcements',
    tags: ['Conference', 'CallForPapers'],
    replies: 3,
    views: 214,
    author: {
      name: 'Moderator Jane',
      avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
    },
    lastActivity: '1d ago',
    trending: false
  },
  {
    id: 104,
    title: 'Hiring: Computer Vision Intern for Wildlife Conservation Start-up',
    category: 'Jobs & Internships',
    tags: ['Hiring', 'Computer Vision'],
    replies: 9,
    views: 432,
    author: {
      name: 'WildAI HR',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    lastActivity: '8h ago',
    trending: false
  },
  {
    id: 105,
    title: 'Is Swahili NLP finally production-ready? Let’s discuss best models.',
    category: 'Research',
    tags: ['NLP', 'Swahili'],
    replies: 17,
    views: 788,
    author: {
      name: 'Prof. Wanjiku',
      avatar: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    lastActivity: '3h ago',
    trending: true
  }
];

// Category Sidebar Component
const CategorySidebar = ({ current, onSelect }: { current: string; onSelect: (cat: string) => void }) => (
  <aside className="hidden lg:block w-64 pr-6 border-r border-border sticky top-20 self-start h-screen overflow-y-auto pb-20">
    <h2 className="text-sm font-bold text-gray-500 uppercase mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-blue-500" /> Categories</h2>
    <ul className="space-y-2">
      {categories.map((cat) => (
        <li key={cat.id}>
          <button
            className={`flex justify-between items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
              current === cat.name ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md' : 'hover:bg-gray-100'
            }`}
            onClick={() => onSelect(cat.name)}
          >
            <span>{cat.name}</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/10">{cat.threads}</span>
          </button>
        </li>
      ))}
    </ul>
  </aside>
);

// Thread card component
const ThreadCard = ({ thread }: { thread: typeof threads[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-white via-white to-gray-50 border border-border rounded-xl p-5 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
  >
    {/* Decorative elements */}
    <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-blue-500/10 z-0"></div>
    <div className="absolute right-12 -bottom-6 w-16 h-16 rounded-full bg-purple-500/10 z-0"></div>
    <div className="flex items-center gap-3 relative z-10">
      <img src={thread.author.avatar} alt={thread.author.name} className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm" />
      <div>
        <h3 className="font-semibold text-lg leading-snug">{thread.title}</h3>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {thread.lastActivity}
          <span className="mx-1">•</span>
          <span>{thread.author.name}</span>
        </div>
      </div>
      {thread.trending && (
        <motion.span 
          className="ml-auto inline-flex items-center gap-1 text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full shadow-sm"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Flame className="w-3 h-3" /> Trending
        </motion.span>
      )}
    </div>

    <div className="flex flex-wrap gap-1 relative z-10">
      {thread.tags.map((tag) => (
        <motion.span
          key={tag}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-1 text-xs bg-blue-600/10 text-blue-700 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-600/20 transition-colors"
        >
          <TagIcon className="w-3 h-3" /> {tag}
        </motion.span>
      ))}
    </div>

    <div className="flex gap-6 text-sm text-gray-500 mt-auto pt-2 border-t border-gray-100 relative z-10">
      <span className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
        <MessageCircle className="w-4 h-4" /> {thread.replies} Replies
      </span>
      <span className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
        <Eye className="w-4 h-4" /> {thread.views} Views
      </span>
      <span className="ml-auto inline-flex items-center gap-1 text-blue-600 font-medium hover:underline cursor-pointer">
        View <ArrowRight className="w-3 h-3" />
      </span>
    </div>
  </motion.div>
);

const ForumsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredThreads = useMemo(() => {
    return threads.filter((t) => {
      const matchCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const matchQuery = t.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, query]);

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col lg:flex-row gap-8 mt-20 pt-10 pl-5 pr-5">
      {/* Sidebar */}
      <CategorySidebar current={selectedCategory} onSelect={setSelectedCategory} />

      {/* Main content */}
      <section className="flex-1 px-1 sm:px-4 md:px-8 lg:pl-0 py-8 space-y-8 max-w-5xl mx-auto w-full bg-transparent">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl font-black tracking-tight bg-transparent text-gray-900">forums</h1>
            {/* <p className="text-muted-foreground mt-2 max-w-md">
              Engage with Nairobi's AI community. Ask questions, share ideas, and collaborate on projects.
            </p> */}
          </div>

          <motion.button 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 self-start sm:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <PlusCircle className="w-5 h-5" /> New Thread
          </motion.button>
        </div>

        {/* Search & filter */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search threads…"
              className="w-full bg-gray-100 border border-border rounded-full py-2.5 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <motion.button 
            className="inline-flex gap-2 items-center bg-white border border-border px-4 py-2.5 rounded-full hover:bg-gray-50 shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FilterIcon className="w-4 h-4" />
            Filters
          </motion.button>
        </div>

        {/* Threads list */}
        <div className="grid gap-6 md:grid-cols-2 relative">
          {filteredThreads.length ? (
            filteredThreads.map((thread) => <ThreadCard key={thread.id} thread={thread} />)
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-blue-500/10 animate-pulse"></div>
                <MessageCircle className="h-12 w-12 text-blue-500 mb-4 relative" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No threads found</h2>
              <p className="text-muted-foreground max-w-sm">Try adjusting your search or filters to find what you're looking for.</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ForumsPage;
