import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import ProjectsPage from './pages/ProjectsPage';
import ForumsPage from './pages/ForumsPage';
import JobsPage from './pages/JobsPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="forums" element={<ForumsPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
