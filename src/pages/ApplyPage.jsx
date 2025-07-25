import { useParams } from 'react-router-dom';
import API from '../services/api';
import { SendHorizonal } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { applySchema } from '../validation/applySchema';
import { useState } from 'react';

const ApplyPage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(applySchema),
  });

  const onSubmit = async (data) => {
    setMessage('');
    setIsError(false);
    try {
      await API.post('/applications', { jobId: id, ...data });
      setMessage('✅ Application submitted successfully!');
      reset();
    } catch {
      setMessage('❌ Failed to apply. Please try again.');
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register('name')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register('email')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="url"
              placeholder="Link to Your cv (e.g. Google Drive, PDF URL)"
              {...register('cv')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.cv && (
              <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>
            )}
          </div>
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