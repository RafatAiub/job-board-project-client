import { useState } from 'react';
import API from '../services/api';

const AddJobPage = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await API.post('/jobs', jobData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Job added successfully!');
      setJobData({ title: '', company: '', location: '', description: '' });
    } catch (err) {
      setMessage('Failed to add job. You may not be authorized.');
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={jobData.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobPage;