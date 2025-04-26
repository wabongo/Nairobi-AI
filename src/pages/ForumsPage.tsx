// React is automatically imported by JSX transform
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Flame,
  PlusCircle,
  Search as SearchIcon,
  Eye,
  ArrowRight,
  MoreHorizontal,
  Bookmark
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
  <aside className="hidden lg:block w-72 pr-6 border-r border-gray-100 sticky top-20 self-start h-screen overflow-y-auto pb-20 font-sans">
    <h2 className="text-sm font-semibold text-gray-900 mb-4">Categories</h2>
    <ul className="space-y-1">
      <li>
        <button
          className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-left transition-colors ${
            current === 'All' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
          }`}
          onClick={() => onSelect('All')}
        >
          <span>All threads</span>
        </button>
      </li>
      {categories.map((cat) => (
        <li key={cat.id}>
          <button
            className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-left transition-colors ${
              current === cat.name ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
            }`}
            onClick={() => onSelect(cat.name)}
          >
            <span>{cat.name}</span>
            <span className="text-xs text-gray-500">{cat.threads}</span>
          </button>
        </li>
      ))}
    </ul>
  </aside>
);

// Thread card component
const ThreadCard = ({ thread }: { thread: typeof threads[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="bg-white border-b border-gray-100 px-5 py-4 flex flex-col gap-3 hover:bg-gray-50/50 transition-colors duration-200"
  >
    <div className="flex items-start gap-3">
      <img src={thread.author.avatar} alt={thread.author.name} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm text-black">{thread.author.name}</span>
            <span className="text-xs text-gray-500">· {thread.lastActivity}</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        <h3 className="font-medium text-base leading-snug mt-1 text-black">{thread.title}</h3>

    </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {thread.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              #{tag.replace(/ /g, '')}
            </span>
          ))}
          {thread.trending && (
            <span className="inline-flex items-center gap-0.5 text-xs text-gray-900 font-medium">
              <Flame className="w-3 h-3 text-orange-500" /> Trending
            </span>
          )}
        </div>
      </div>

    <div className="flex items-center justify-between mt-1 text-gray-500">
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-1.5 hover:text-black transition-colors">
          <MessageCircle className="w-[18px] h-[18px]" /> 
          <span className="text-xs">{thread.replies}</span>
        </button>
        <button className="flex items-center gap-1.5 hover:text-black transition-colors">
          <Eye className="w-[18px] h-[18px]" />
          <span className="text-xs">{thread.views}</span>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:text-black transition-colors">
          <Bookmark className="w-[18px] h-[18px]" />
        </button>
        <button className="hover:text-black transition-colors">
          <ArrowRight className="w-[18px] h-[18px]" />
        </button>
      </div>
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
    <main className="min-h-screen bg-white text-gray-900 flex flex-col lg:flex-row gap-0 mt-20 pt-10 font-sans w-full pl-10 pr-10">
      {/* Sidebar */}
      <CategorySidebar current={selectedCategory} onSelect={setSelectedCategory} />

      {/* Main content */}
      <section className="flex-1 border-l border-gray-100 w-full bg-transparent">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div>
            <h1 className="text-xl font-semibold text-black font-sora">Forums</h1>
          </div>

          <motion.button 
            className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
            whileTap={{ scale: 0.95 }}
          >
            <PlusCircle className="w-4 h-4" /> New Thread
          </motion.button>
        </div>

        {/* Search & filter */}
        <div className="px-5 py-3 border-b border-gray-100">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search forums"
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-9 pr-4 focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Threads list */}
        <div className="divide-y divide-gray-100 bg-white">
          {filteredThreads.length ? (
            filteredThreads.map((thread) => <ThreadCard key={thread.id} thread={thread} />)
          ) : (
            <div className="flex flex-col items-center text-center py-16">
              <MessageCircle className="h-10 w-10 text-gray-300 mb-4" />
              <h2 className="text-lg font-medium text-black mb-1">No threads found</h2>
              <p className="text-gray-500 text-sm max-w-sm">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ForumsPage;
