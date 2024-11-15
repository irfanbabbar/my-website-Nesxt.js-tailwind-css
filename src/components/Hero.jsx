// components/Hero.js
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-neutral-200 text-yellow-700 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MyWebsite</h1>
        <p className="text-xl md:text-2xl mb-8">We provide top-notch services to elevate your business.</p>
        <Link className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition" href="/services">
          
            Our Services
          
        </Link>
      </div>
    </div>
  );
};

export default Hero;
