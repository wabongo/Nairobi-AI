
import { motion } from 'framer-motion';
import { Bot, CreditCard, Calendar, Bell, ArrowRight, Star, Users, Code, Zap, Sparkles, FileText, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

// Project data
const featuredProject = {
  id: 1,
  title: 'InvoiceAgent AI',
  description: 'An agentic AI solution that helps small businesses manage invoices, track payments, and automate follow-ups to ensure timely payments.',
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  tags: ['Agentic AI', 'Small Business', 'Invoicing', 'Automation'],
  creator: {
    name: 'Nairobi AI Finance Team',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  stats: {
    stars: 128,
    forks: 34,
    users: 210
  },
  progress: 85,
  demo: 'https://example.com/demo',
  github: '#'
};

const projects = [
  {
    id: 2,
    title: 'Payment Reminder Bot',
    description: 'A conversational AI bot that sends personalized payment reminders to clients via email, SMS, and WhatsApp.',
    image: 'https://images.pexels.com/photos/4199526/pexels-photo-4199526.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Chatbot', 'Reminders', 'Multi-channel'],
    creator: {
      name: 'Saitama Mwangi',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    stats: {
      stars: 86,
      forks: 21,
      users: 145
    }
  },
  {
    id: 3,
    title: 'Invoice Analyzer',
    description: 'An AI tool that analyzes invoice patterns to predict cash flow and recommend optimal payment collection strategies.',
    image: 'https://images.pexels.com/photos/8962519/pexels-photo-8962519.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Predictive Analytics', 'Cash Flow', 'Strategy'],
    creator: {
      name: 'Wendy Kurosaki',
      avatar: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    stats: {
      stars: 72,
      forks: 18,
      users: 98
    }
  },
  {
    id: 4,
    title: 'Contract Intelligence',
    description: 'Uses NLP to extract payment terms from contracts and automatically set up appropriate invoice schedules.',
    image: 'https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['NLP', 'Contract Analysis', 'Scheduling'],
    creator: {
      name: 'Zoro Kimani',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    stats: {
      stars: 64,
      forks: 15,
      users: 82
    }
  }
];

// Project tag component
const ProjectTag = ({ tag }: { tag: string }) => (
  <span className="inline-block bg-green-700/20 text-green-700 px-2 py-1 text-xs rounded-full">
    {tag}
  </span>
);

// Project card component
const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="h-48 overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
    </div>
    <div className="p-5">
      <div className="flex gap-2 mb-3 flex-wrap">
        {project.tags.map((tag, index) => (
          <ProjectTag key={index} tag={tag} />
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={project.creator.avatar} alt={project.creator.name} className="w-8 h-8 rounded-full mr-2" />
          <span className="text-sm text-gray-700">{project.creator.name}</span>
        </div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Star size={16} className="mr-1" />
          <span>{project.stats.stars}</span>
        </div>
        <div className="flex items-center">
          <Code size={16} className="mr-1" />
          <span>{project.stats.forks}</span>
        </div>
        <div className="flex items-center">
          <Users size={16} className="mr-1" />
          <span>{project.stats.users}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// Featured project component
const FeaturedProject = ({ project }: { project: typeof featuredProject }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-transparent overflow-hidden"
  >
    <div className="relative h-full min-h-[300px] lg:min-h-0">
      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-green-700/80 text-white px-3 py-1 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
        <div className="flex items-center text-white/80">
          <img src={project.creator.avatar} alt={project.creator.name} className="w-8 h-8 rounded-full mr-2" />
          <span>{project.creator.name}</span>
        </div>
      </div>
    </div>
    
    <div className="p-8 flex flex-col">
      <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Project Progress</span>
          <span className="text-sm font-medium">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-700 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8 text-center">
        <div>
          <div className="text-2xl font-bold text-gray-800">{project.stats.stars}</div>
          <div className="text-xs text-gray-500 flex items-center justify-center">
            <Star size={12} className="mr-1" /> Stars
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-800">{project.stats.forks}</div>
          <div className="text-xs text-gray-500 flex items-center justify-center">
            <Code size={12} className="mr-1" /> Forks
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-800">{project.stats.users}</div>
          <div className="text-xs text-gray-500 flex items-center justify-center">
            <Users size={12} className="mr-1" /> Users
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 mt-auto">
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
        >
          <Zap size={18} className="mr-2" />
          Demo
        </a>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <Code size={18} className="mr-2" />
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

// Feature list component
const FeatureList = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-green-700" />,
      title: 'Agentic Automation',
      description: 'AI agents that autonomously handle the entire invoicing workflow from creation to collection.'
    },
    {
      icon: <Bell className="h-6 w-6 text-green-700" />,
      title: 'Smart Reminders',
      description: 'Contextually aware payment reminders that adapt tone and frequency based on client history.'
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-700" />,
      title: 'Payment Scheduling',
      description: 'Intelligent scheduling of invoices based on optimal payment timing for your cash flow.'
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-700" />,
      title: 'Payment Processing',
      description: 'Seamless integration with payment processors to enable instant payments and reconciliation.'
    },
    {
      icon: <FileText className="h-6 w-6 text-green-700" />,
      title: 'Contract Analysis',
      description: 'Extract payment terms from contracts to automatically create accurate invoice schedules.'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-700" />,
      title: 'Client Communication',
      description: 'Natural language communication with clients about invoices and payments.'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="bg-green-700/10 p-3 rounded-full w-fit mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

const ProjectsPage = () => {
  
  return (
    <main className="responsive-container mt-16 ">
      <div className="space-y-12 mt-20 mb-20 bg-transparent">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 bg-transparent"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects Showcase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore innovative AI projects built by our community members to solve real-world problems.
          </p>
        </motion.section>
        
        {/* Featured Project */}
        <section className="mb-16 bg-transparent">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Project</h2>
          </div>
          <FeaturedProject project={featuredProject} />
        </section>
        
        {/* Key Features */}
        <section className="mb-16 bg-transparent">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features of InvoiceAgent AI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our agentic AI solution helps small businesses never miss payments with these powerful features:
            </p>
          </div>
          <FeatureList />
        </section>
        
        {/* Project Gallery */}
        <section className="mb-16 bg-transparent">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Related Projects</h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black text-white p-10 rounded-2xl text-center"
        >
<Sparkles className="h-12 w-12 mx-auto mb-6 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent" />
<h2 className="text-3xl font-bold mb-4">Want to Showcase a Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our community of innovators and developers is always looking for new and innovative projects to showcase. We apppreciate interest in all fields and we welcome all submissions.
          </p>
          <Link 
            to="/projects/submit" 
            className="inline-block max-w-fit flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-lg font-medium transition-all duration-300"
          >
            Submit Your Project <ArrowRight size={16} className="ml-1" />
          </Link>
        </motion.section>
      </div>
    </main>
  );
};

export default ProjectsPage;
