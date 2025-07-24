import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get('/jobs');
        setJobs(res.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div key={job._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.company} - {job.location}</p>
              <p className="mt-2 text-gray-700 line-clamp-3">{job.description}</p>
              <div className="mt-4 flex justify-between">
                <Link to={`/jobs/${job._id}`} className="text-blue-600 font-medium hover:underline">Details</Link>
                <Link to={`/apply/${job._id}`} className="text-green-600 font-medium hover:underline">Apply</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListPage;
