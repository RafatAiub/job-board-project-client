import { useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const ApplyPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/applications', {
        jobId: id,
        ...formData
      });
      setMessage('Application submitted successfully!');
      setFormData({ name: '', email: '', resume: '' });
    } catch (err) {
      setMessage('Failed to apply. Make sure all fields are filled.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply for this Job</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="url"
          name="resume"
          placeholder="Link to your resume (e.g. PDF)"
          value={formData.resume}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
