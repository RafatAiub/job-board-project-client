import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobListPage from './pages/JobListPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/LoginPage';
import AddJobPage from './pages/AddJobPage';
import ProtectedRoute from './routes/ProtectedRoute';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<JobListPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/add-job" element={
            <ProtectedRoute>
              <AddJobPage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
