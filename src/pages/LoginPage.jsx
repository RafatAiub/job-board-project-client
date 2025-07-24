// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // hardcoded admin check
    if (email === 'admin@shomvob.com' && password === 'admin123') {
      try {
        // 👇 token generate via backend route or use local one for now
        const res = await axios.get('https://job-board-project-server-production.up.railway.app/generate-token');
        const token = res.data.token;

        localStorage.setItem('token', token);
        navigate('/admin/add-job');
      } catch (err) {
        setError('Token generation failed');
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg mt-16">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
