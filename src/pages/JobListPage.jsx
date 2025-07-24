import { useEffect, useState } from 'react';
import API from '../services/api';
import JobCard from '../components/JobCard';

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get('/jobs');
        if (res.data && Array.isArray(res.data.jobs)) {
          setJobs(res.data.jobs);
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-700">
        Loading job opportunities...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">Explore Job Opportunities</h1>
          <p className="mt-2 text-gray-600 text-lg">Find your next opportunity from our curated job list</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full text-xl">No jobs available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListPage;
