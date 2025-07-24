import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">JobBoard</Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          {token && <Link to="/admin/add-job" className="hover:text-gray-200">Add Job</Link>}
          {!token ? (
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Login</Link>
          ) : (
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
