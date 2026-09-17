import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AgentsPage from './pages/AgentsPage';
import TasksPage from './pages/TasksPage';
import ObjectivesPage from './pages/ObjectivesPage';
import RoutinesPage from './pages/RoutinesPage';
import FilesPage from './pages/FilesPage';
import AppsPage from './pages/AppsPage';
import SettingsPage from './pages/SettingsPage';
import SkillsPage from './pages/SkillsPage';
import CompliancePage from './pages/CompliancePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="agents/:id" element={<AgentsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="objectives" element={<ObjectivesPage />} />
          <Route path="routines" element={<RoutinesPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="files" element={<FilesPage />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
