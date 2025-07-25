import { Link, useNavigate } from 'react-router-dom';
import { BriefcaseBusiness } from 'lucide-react';
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-green-700">
          <BriefcaseBusiness className="w-6 h-6" />
          JobBoard
        </Link>

        {/* Menu Links */}
        <div className="flex items-center gap-5 text-sm font-medium text-gray-700">
          <Link
            to="/"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Home
          </Link>

          {token && (
            <Link
              to="/admin/add-job"
              className="hover:text-green-600 transition-colors duration-200"
            >
              Add Job
            </Link>
          )}

          {!token ? (
            <Link
              to="/login"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              Admin Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
