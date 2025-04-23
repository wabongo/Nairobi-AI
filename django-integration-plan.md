# Nairobi AI - Django Backend Integration Plan

## Project Analysis

The current Nairobi AI project is a React/TypeScript frontend application with the following characteristics:

- **Frontend Framework:** React with TypeScript
- **State Management:** Zustand
- **UI Components:** ShadCN/Radix UI
- **Styling:** Tailwind CSS
- **Animations:** Rive
- **Build Tool:** Vite

The application has a well-structured frontend with pages for:
- Home
- Events
- Resources
- Projects
- Forums
- Jobs
- Profile

Currently, these pages are mostly static placeholders without backend functionality. The project aims to create a community hub for AI practitioners in Kenya, focusing on education, collaboration, and social impact.

## Django Backend Integration Plan

### 1. Architecture Overview

```
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  React Frontend │◄────►│ Django Backend  │
│  (Vite)         │      │ (REST API)      │
│                 │      │                 │
└─────────────────┘      └─────────────────┘
                               │
                               ▼
                         ┌─────────────┐
                         │             │
                         │  Database   │
                         │  (PostgreSQL)│
                         │             │
                         └─────────────┘
```

### 2. Backend Features

#### User Management
- User registration and authentication
- User profiles with AI interests, skills, and experience
- Social authentication (Google, GitHub)
- Role-based permissions (admin, moderator, member)

#### Content Management
- Blog posts with rich text editing
- Resource library (articles, tutorials, tools)
- Events calendar with registration
- Project showcase
- Job board

#### Community Features
- Forums with categories and threads
- Comments and discussions
- Upvoting/liking system
- Notifications

#### Kenya-Specific Features
- Localized content focusing on Kenyan AI ecosystem
- Swahili language support
- Showcase of AI applications solving Kenyan challenges
- Directory of local AI companies and organizations
- Mobile money integration (M-Pesa) for event payments

#### Agentic Workflows
- AI-powered content recommendation
- Automated event reminders and follow-ups
- Intelligent matching for mentorship opportunities
- Automated content moderation
- Personalized learning paths

### 3. Technical Implementation

#### Django Project Structure

```
nairobi_ai/
├── manage.py
├── nairobi_ai/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── accounts/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── blog/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── events/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── forums/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── resources/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── projects/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── jobs/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
└── agents/
    ├── models.py
    ├── services.py
    ├── tasks.py
    └── utils.py
```

#### Key Django Packages

- **Django REST Framework**: For building the API
- **Django Allauth**: For authentication including social auth
- **Django CORS Headers**: For handling CORS
- **Django Filter**: For filtering API results
- **Django Channels**: For real-time features
- **Celery**: For background tasks and scheduled jobs
- **Django Storages**: For file storage (with AWS S3)
- **Django REST Framework Simple JWT**: For JWT authentication
- **Django Mpesa**: For M-Pesa integration
- **LangChain/LlamaIndex**: For agentic workflows

### 4. API Endpoints

#### Authentication
- `POST /api/auth/register/`: User registration
- `POST /api/auth/login/`: User login
- `POST /api/auth/logout/`: User logout
- `GET /api/auth/user/`: Get current user
- `PUT /api/auth/user/`: Update user profile

#### Blog
- `GET /api/blog/posts/`: List blog posts
- `POST /api/blog/posts/`: Create blog post
- `GET /api/blog/posts/{id}/`: Get blog post
- `PUT /api/blog/posts/{id}/`: Update blog post
- `DELETE /api/blog/posts/{id}/`: Delete blog post

#### Events
- `GET /api/events/`: List events
- `POST /api/events/`: Create event
- `GET /api/events/{id}/`: Get event
- `PUT /api/events/{id}/`: Update event
- `DELETE /api/events/{id}/`: Delete event
- `POST /api/events/{id}/register/`: Register for event

#### Forums
- `GET /api/forums/categories/`: List forum categories
- `GET /api/forums/threads/`: List forum threads
- `POST /api/forums/threads/`: Create forum thread
- `GET /api/forums/threads/{id}/`: Get forum thread
- `POST /api/forums/threads/{id}/replies/`: Reply to thread

#### Resources
- `GET /api/resources/`: List resources
- `POST /api/resources/`: Create resource
- `GET /api/resources/{id}/`: Get resource

#### Projects
- `GET /api/projects/`: List projects
- `POST /api/projects/`: Create project
- `GET /api/projects/{id}/`: Get project

#### Jobs
- `GET /api/jobs/`: List jobs
- `POST /api/jobs/`: Create job posting
- `GET /api/jobs/{id}/`: Get job posting
- `POST /api/jobs/{id}/apply/`: Apply for job

### 5. Frontend Integration

#### API Client Setup

Create a service layer in the React frontend to communicate with the Django backend:

```typescript
// src/services/api.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

#### Authentication Store

Extend the existing Zustand store to handle authentication:

```typescript
// src/stores/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../services/api';

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_image?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post('/auth/login/', { email, password });
          set({ 
            token: response.data.token, 
            isAuthenticated: true,
            isLoading: false 
          });
          await get().fetchUser();
        } catch (error: any) {
          set({ 
            error: error.response?.data?.detail || 'Login failed', 
            isLoading: false 
          });
        }
      },
      
      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          await api.post('/auth/register/', userData);
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.response?.data?.detail || 'Registration failed', 
            isLoading: false 
          });
        }
      },
      
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        localStorage.removeItem('token');
      },
      
      fetchUser: async () => {
        if (!get().token) return;
        set({ isLoading: true });
        try {
          const response = await api.get('/auth/user/');
          set({ user: response.data, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token }),
    }
  )
);
```

### 6. Development Workflow

#### Local Development Setup

1. **Backend Development**:
   - Run Django server on port 8000
   - Use Django's development server for hot reloading

2. **Frontend Development**:
   - Continue using Vite for frontend development
   - Configure proxy in Vite to forward API requests to Django

```typescript
// vite.config.ts
export default defineConfig({
  // ... existing config
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
```

#### Production Deployment

1. **Backend Deployment**:
   - Deploy Django to a cloud provider (AWS, DigitalOcean, etc.)
   - Use Gunicorn as the WSGI server
   - Use Nginx as a reverse proxy
   - Set up PostgreSQL database

2. **Frontend Deployment**:
   - Build the React app with Vite
   - Deploy static files to a CDN or serve them through Nginx

### 7. Kenya-Specific Considerations

#### Content Strategy

- Focus on AI applications relevant to Kenyan industries (agriculture, healthcare, finance, education)
- Showcase success stories of AI implementation in Kenya
- Provide resources in both English and Swahili
- Address challenges specific to the Kenyan context (data availability, infrastructure, etc.)

#### Technical Considerations

- Optimize for mobile users (majority of Kenyan internet users)
- Consider bandwidth limitations and implement progressive loading
- Integrate with local payment systems (M-Pesa)
- Implement offline capabilities where possible

### 8. Agentic Workflows Implementation

#### Content Recommendation System

Implement an AI-powered recommendation system that suggests relevant content, events, and connections based on user interests and behavior:

```python
# agents/services.py
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

class ContentRecommendationService:
    def __init__(self):
        self.llm = OpenAI(temperature=0.7)
        self.prompt = PromptTemplate(
            input_variables=["user_interests", "available_content"],
            template="""Based on the user's interests: {user_interests}
            And the available content: {available_content}
            Recommend the top 5 most relevant items for this user."""
        )
        self.chain = LLMChain(llm=self.llm, prompt=self.prompt)
    
    def get_recommendations(self, user, content_items):
        user_interests = user.profile.interests
        available_content = [item.title + ": " + item.description for item in content_items]
        
        recommendations = self.chain.run({
            "user_interests": user_interests,
            "available_content": available_content
        })
        
        return recommendations
```

#### Automated Event Management

Implement an agent that handles event reminders, follow-ups, and feedback collection:

```python
# agents/tasks.py
from celery import shared_task
from django.utils import timezone
from django.core.mail import send_mail
from events.models import Event, EventRegistration

@shared_task
def send_event_reminders():
    """Send reminders for upcoming events"""
    tomorrow = timezone.now().date() + timezone.timedelta(days=1)
    upcoming_events = Event.objects.filter(date=tomorrow)
    
    for event in upcoming_events:
        registrations = EventRegistration.objects.filter(event=event)
        for registration in registrations:
            send_mail(
                f'Reminder: {event.title} is tomorrow!',
                f'Hello {registration.user.first_name},\n\nThis is a reminder that {event.title} is happening tomorrow at {event.time}.\n\nLocation: {event.location}\n\nWe look forward to seeing you!\n\nNairobi AI Team',
                'noreply@nairobiaiorg',
                [registration.user.email],
                fail_silently=False,
            )

@shared_task
def collect_event_feedback(event_id):
    """Send feedback forms after an event"""
    event = Event.objects.get(id=event_id)
    registrations = EventRegistration.objects.filter(event=event)
    
    for registration in registrations:
        send_mail(
            f'Feedback for {event.title}',
            f'Hello {registration.user.first_name},\n\nThank you for attending {event.title}. We would appreciate your feedback.\n\nPlease fill out this form: https://nairobiaiorg/feedback/{event.id}\n\nNairobi AI Team',
            'noreply@nairobiaiorg',
            [registration.user.email],
            fail_silently=False,
        )
```

### 9. Implementation Timeline

#### Phase 1: Foundation (1-2 months)
- Set up Django project with basic structure
- Implement user authentication system
- Create core models and API endpoints
- Integrate frontend with authentication API

#### Phase 2: Core Features (2-3 months)
- Implement blog functionality
- Build events system
- Create forums and discussions
- Develop resource library

#### Phase 3: Advanced Features (2-3 months)
- Implement project showcase
- Build job board
- Add Kenya-specific features
- Integrate M-Pesa payments

#### Phase 4: Agentic Workflows (2-3 months)
- Implement content recommendation system
- Build automated event management
- Create intelligent matching for mentorship
- Develop automated content moderation

### 10. Next Steps

1. **Set up Django project structure**
   - Initialize Django project
   - Configure database
   - Set up Django REST Framework

2. **Create user authentication system**
   - Implement registration and login
   - Set up JWT authentication
   - Create user profiles

3. **Develop initial API endpoints**
   - Create basic CRUD operations for core models
   - Implement permissions and validation

4. **Integrate frontend with backend**
   - Set up API client in React
   - Implement authentication flow in frontend
   - Update components to fetch data from API

## Conclusion

This integration plan provides a comprehensive roadmap for adding a Django backend to the existing Nairobi AI React frontend. The proposed architecture focuses on creating a robust, scalable platform that serves the specific needs of the Kenyan AI community while incorporating modern features like agentic workflows.

By following this plan, the Nairobi AI platform can evolve from a static frontend to a full-featured community hub that connects AI experts with interested parties, facilitates knowledge sharing, and drives social impact through AI education and implementation.