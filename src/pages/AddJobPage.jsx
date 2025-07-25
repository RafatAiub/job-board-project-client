import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addJobSchema } from '../validation/addJobSchema';
import API from '../services/api';
import { useState } from 'react';

const AddJobPage = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addJobSchema),
  });

  const onSubmit = async (data) => {
    setMessage('');
    setIsError(false);
    try {
      await API.post('/jobs', data);
      setMessage('✅ Job posted successfully!');
      reset();
    } catch {
      setMessage('❌ Failed to post job. Please try again.');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add a New Job
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
              placeholder="Job Title"
              {...register('title')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              {...register('company')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Location"
              {...register('location')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Job Description"
              {...register('description')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Salary"
              {...register('salary')}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.salary && (
              <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-200"
          >
            ➕ Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobPage;