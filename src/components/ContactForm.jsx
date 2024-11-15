// components/ContactForm.js
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Implement form submission logic (e.g., send to API or email)
    console.log(data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-stone-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {isSubmitSuccessful && <p className="text-black mb-4">Thank you for your message!</p>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          {...register('name', { required: true })}
          className={`shadow appearance-none border ${
            errors.name ? 'border-red-500' : ''
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className={`shadow appearance-none border ${
            errors.email ? 'border-red-500' : ''
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="email"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs italic">Please enter a valid email.</p>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          {...register('message', { required: true })}
          className={`shadow appearance-none border ${
            errors.message ? 'border-red-500' : ''
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          rows="5"
          placeholder="Your message..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs italic">Please enter your message.</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
