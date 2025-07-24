import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-sm text-gray-600">{job.company} — {job.location}</p>
      <p className="text-gray-700 mt-2 line-clamp-2">{job.description}</p>
      <Link
        to={`/jobs/${job._id}`}
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
