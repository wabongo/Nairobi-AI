import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, KeySquare } from 'lucide-react';
import GradientBackground from '../components/animations/GradientBackground';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  // Set animation visibility after component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    
    try {
      // Implement your registration logic here
      console.log('Registration attempt with:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect after successful registration
      // history.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      // Implement Google signup logic here
      console.log('Google signup initiated');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Google signup failed:', error);
      setError('Google signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-amber-50">
      {/* Motion gradient background */}
      <GradientBackground
        colors={['#f8fafc', '#f1f5f9', '#f5f3ff', '#faf5ff']}
        duration={20}
      />

      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0 pointer-events-none" />

      <div className="max-w-md w-full space-y-6 backdrop-blur-sm p-8 rounded-3xl shadow-lg z-10 relative">
        <div>
          <h1 
            className={`text-3xl font-bold tracking-tight mb-1 text-center transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-600 to-red-600">
              Join Us
            </span>
          </h1>
          <p 
            className={`mt-1 text-center text-sm text-gray-600 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Already have an account ?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Log in
            </Link>
          </p>
        </div>
        
        {error && (
          <div 
            className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
            role="alert"
            style={{ transitionDelay: '350ms' }}
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <form 
          className={`mt-6 space-y-4 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
          style={{ transitionDelay: '400ms' }}
          onSubmit={handleSubmit}
        >
          <div className="rounded-md -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username (optional)</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="appearance-none rounded-xl relative block w-full px-3 py-2 mb-1 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Username (optional)"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 mb-1 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 mb-1 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 mb-1 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div 
            className={`transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-all duration-300"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </div>
        </form>
        
        <div 
          className={`mt-6 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full flex items-center justify-center px-3 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
            >
              <KeySquare className="h-4 w-4 mr-2 text-purple-600" />
              Google
            </button>
          </div>
        </div>
        
        <div 
          className={`mt-4 text-center text-xs text-gray-600 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '700ms' }}
        >
          By signing up, you agree to our{' '}
          <a href="#" className="text-purple-600 hover:text-purple-500">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-purple-600 hover:text-purple-500">Privacy Policy</a>
        </div>
        
        <div 
          className={`mt-4 transition-all text-center duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <Link 
            to='/' 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 font-medium transition-all duration-300"
            >
            <span className="mr-1 no-underline">←</span>
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;