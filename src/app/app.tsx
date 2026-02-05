import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import {
  AboutPage,
  ProjectsPage,
  ExperiencePage,
  ContactPage,
  BlogPage,
  ReactPerformancePage,
} from './pages';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/react-performance" element={<ReactPerformancePage />} />
      </Route>
    </Routes>
  );
}

export default App;
