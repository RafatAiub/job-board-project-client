import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../services/api';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">{job.company} — {job.location}</p>
      <p className="text-gray-800 mb-6 whitespace-pre-line">{job.description}</p>
      <Link to={`/apply/${job._id}`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetailsPage;
