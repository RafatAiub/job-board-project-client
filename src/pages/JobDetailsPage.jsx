import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../services/api';
import { Briefcase, MapPin } from 'lucide-react';

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

  if (!job)
    return <div className="text-center text-lg py-10 text-gray-500">Loading job details...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <p className="flex items-center gap-2"><Briefcase size={18} /> {job.company}</p>
          <p className="flex items-center gap-2"><MapPin size={18} /> {job.location}</p>
        </div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
          {job.description}
        </p>
        <Link
          to={`/apply/${job._id}`}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetailsPage;
