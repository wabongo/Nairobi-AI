import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Rss, 
  Bell,
  Bot,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

// Dummy news data
const newsArticles = [
  {
    id: 1,
    title: 'New Research Shows AI Agents Can Autonomously Discover Novel Algorithms',
    summary: 'A groundbreaking study demonstrates how AI agents can collaborate to discover new algorithms without human intervention, potentially revolutionizing software development.',
    source: 'AI Research Journal',
    date: 'April 23, 2025',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    url: 'https://example.com/article1',
    tags: ['AI Agents', 'Algorithm Discovery', 'Research'],
    featured: true
  },
  {
    id: 2,
    title: 'Tech Giants Announce Collaborative Framework for Responsible AI Development',
    summary: 'Leading technology companies have joined forces to create a unified framework for ethical AI development, addressing concerns about safety and transparency.',
    source: 'Tech Insider',
    date: 'April 21, 2025',
    category: 'Industry',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80',
    url: 'https://example.com/article2',
    tags: ['Ethics', 'Industry Collaboration', 'Regulation'],
    featured: false
  },
  {
    id: 3,
    title: 'Open-Source LLM Matches Performance of Proprietary Models',
    summary: 'A new open-source large language model has achieved benchmark results comparable to leading commercial models, democratizing access to advanced AI capabilities.',
    source: 'Open AI News',
    date: 'April 19, 2025',
    category: 'Open Source',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80',
    url: 'https://example.com/article3',
    tags: ['LLM', 'Open Source', 'Benchmarks'],
    featured: false
  },
  {
    id: 4,
    title: 'AI-Powered Code Generation Tool Reduces Development Time by 40%',
    summary: 'A new study shows that developers using AI code assistants complete projects significantly faster while maintaining code quality and reducing bugs.',
    source: 'Developer Weekly',
    date: 'April 18, 2025',
    category: 'Developer Tools',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    url: 'https://example.com/article4',
    tags: ['Code Generation', 'Developer Productivity', 'Software Engineering'],
    featured: false
  },
  {
    id: 5,
    title: 'Breakthrough in Multimodal AI Enables More Natural Human-Computer Interaction',
    summary: 'Researchers have developed a new multimodal AI system that can seamlessly process and respond to combinations of text, speech, images, and gestures.',
    source: 'AI Frontiers',
    date: 'April 16, 2025',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80',
    url: 'https://example.com/article5',
    tags: ['Multimodal AI', 'Human-Computer Interaction', 'Research'],
    featured: false
  },
  {
    id: 6,
    title: 'African AI Startups Secure Record $2.5 Billion in Funding',
    summary: 'Venture capital investment in African AI companies reaches an all-time high, with Kenyan startups leading the continent in attracting international funding.',
    source: 'African Tech Today',
    date: 'April 15, 2025',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    url: 'https://example.com/article6',
    tags: ['African Tech', 'Funding', 'Startups'],
    featured: false
  }
];

// Categories for filtering
const categories = [
  'All', 'Research', 'Industry', 'Open Source', 'Developer Tools', 'Business', 'Ethics'
];

// News article card component
const NewsCard = ({ article }: { article: typeof newsArticles[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
      <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
        {article.category}
      </div>
      {article.featured && (
        <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
          Featured
        </div>
      )}
    </div>
    
    <div className="p-5 flex-grow flex flex-col">
      <div className="flex items-center text-xs text-gray-500 mb-3">
        <Calendar className="w-3 h-3 mr-1" />
        <span>{article.date}</span>
        <span className="mx-2">•</span>
        <span>{article.source}</span>
      </div>
      
      <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{article.summary}</p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {article.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 font-medium flex items-center hover:underline mt-auto"
      >
        Read Full Article <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

// Featured article component
const FeaturedArticle = ({ article }: { article: typeof newsArticles[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-transparent rounded-xl overflow-hidden"
  >
    <div className="relative h-full min-h-[300px] lg:min-h-0">
      <img 
        src={article.image} 
        alt={article.title} 
        className="absolute inset-0 w-full h-full object-cover rounded-xl" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 rounded-xl">
        <div className="flex gap-2 mb-3">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
            {article.category}
          </span>
          <span className="inline-block bg-amber-500 text-white px-3 py-1 text-xs rounded-full">
            Featured
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">{article.title}</h2>
        <div className="flex items-center text-white/80">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-2">{article.date}</span>
          <span className="mr-2">•</span>
          <span>{article.source}</span>
        </div>
      </div>
    </div>
    
    <div className="p-6 flex flex-col">
      <p className="text-gray-700 mb-6 text-lg">{article.summary}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-auto">
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block underline text-blue-600 py-3 px-6 rounded-lg flex items-center hover:text-blue-800 transition-colors"
        > 
          Read Full Article <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </div>
  </motion.div>
);

// News update feature component
const NewsUpdateFeature = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-blue-600" />,
      title: 'AI-Powered News Collection',
      description: 'Our intelligent agent continuously scans the web for the latest AI and software development news.'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: 'Daily Updates',
      description: 'Fresh content added daily to keep you informed about the rapidly evolving tech landscape.'
    },
    {
      icon: <Tag className="h-6 w-6 text-blue-600" />,
      title: 'Smart Categorization',
      description: 'News is automatically categorized and tagged for easy filtering and discovery.'
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-600" />,
      title: 'Custom Alerts',
      description: 'Set up personalized notifications for topics and technologies you care about most.'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter articles based on category and search query
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  // Get featured article
  const featuredArticle = newsArticles.find(article => article.featured);
  
  return (
    <main className="responsive-container mt-16">
      <div className="space-y-12 mt-20 mb-20 bg-transparent">
        {/* Search and Filter */}
        <section className="mb-8 bg-transparent">
          <div className="flex flex-col gap-4 items-start">
            <div className="relative w-full md:w-1/2 p-2">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-10 pr-4 bg-gray-100 rounded-2xl border border-gray-200 focus:outline-none focus:ring-0 focus:bg-white focus:ring-blue-100"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="flex overflow-x-auto gap-2 pb-2 w-full md:w-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeCategory === category 
                      ? 'bg-pink-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-16 bg-transparent">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Story</h2>
            </div>
            <FeaturedArticle article={featuredArticle} />
          </section>
        )}
        
        {/* Latest News */}
        <section className="mb-16 bg-transparent">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <div className="flex items-center text-blue-600">
              <Rss size={16} className="mr-2" />
              <span>Subscribe to updates</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(article => !article.featured).map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </section>
        
        {/* News Update Feature */}
        <section className="mb-16 bg-transparent">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our News System Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered news aggregation system keeps you informed with minimal effort.
            </p>
          </div>
          <NewsUpdateFeature />
        </section>
        
        {/* Newsletter Signup */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-green-600/30 text-white p-10 rounded-2xl text-center"
        >
          <Newspaper className="h-12 w-12 mx-auto mb-6 text-black/80" />
          <h2 className="text-3xl text-black/80 mb-4">Never Miss an Update</h2>
          <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter and get the latest AI and software development news delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow py-3 px-4 rounded-l-lg focus:outline-none text-gray-100"
            />
            <button className="bg-black text-white py-3 px-6 rounded-r-lg hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default ResourcesPage;
