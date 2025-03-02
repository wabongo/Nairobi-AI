import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import HomePage from './components/pages/HomePage';
import EventsPage from './components/pages/EventsPage';
import ResourcesPage from './components/pages/ResourcesPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ForumsPage from './components/pages/ForumsPage';
import JobsPage from './components/pages/JobsPage';
import ProfilePage from './components/pages/ProfilePage';
import NotFoundPage from './components/pages/NotFoundPage';

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
