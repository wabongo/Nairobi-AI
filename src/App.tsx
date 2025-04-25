import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import ProjectsPage from './pages/ProjectsPage';
import ForumsPage from './pages/ForumsPage';
import JobsPage from './pages/JobsPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetailsPage from './pages/EventDetailsPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="forums" element={<ForumsPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
