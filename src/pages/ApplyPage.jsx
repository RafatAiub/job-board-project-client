import { useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import { SendHorizonal } from 'lucide-react';

const ApplyPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cv: '',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    try {
      const res = await API.post('/applications', {
        jobId: id,
        ...formData,
      });
      setMessage('✅ Application submitted successfully!');
      setFormData({ name: '', email: '', cv: '' });
    } catch (err) {
      setMessage('❌ Failed to apply. Make sure all fields are filled.');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
          <SendHorizonal className="w-6 h-6 text-green-600" />
          Apply for this Job
        </h2>

        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              isError ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="url"
            name="cv"
            placeholder="Link to Your cv (e.g. Google Drive, PDF URL)"
            value={formData.cv}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-200"
          >
            🚀 Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
