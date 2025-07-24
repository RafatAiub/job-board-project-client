import { Link } from 'react-router-dom';
import { Briefcase, MapPin } from 'lucide-react'; // optional: nice icons

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-5 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>

        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <Briefcase size={16} className="text-green-600" />
          <span>{job.company}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
          <MapPin size={16} className="text-green-600" />
          <span>{job.location}</span>
        </div>

        <p className="text-gray-700 mt-3 text-sm line-clamp-3">
          {job.description}
        </p>
      </div>

      <Link
        to={`/jobs/${job._id}`}
        className="inline-block mt-6 text-center bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
