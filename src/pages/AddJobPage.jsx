import { useState } from 'react';
import API from '../services/api';
import { Briefcase, Building2, MapPin } from 'lucide-react';

const AddJobPage = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    try {
      const token = localStorage.getItem('token');
      const res = await API.post('/jobs', jobData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('✅ Job added successfully!');
      setJobData({ title: '', company: '', location: '', description: '' });
    } catch (err) {
      setMessage('❌ Failed to add job. You may not be authorized.');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6 text-green-600" />
          Post a New Job
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
            name="title"
            placeholder="Job Title"
            value={jobData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={jobData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={jobData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={jobData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-200"
          >
            ➕ Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobPage;
