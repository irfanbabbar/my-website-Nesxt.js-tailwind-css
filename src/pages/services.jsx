// pages/services.js
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import '../../styles/globals.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern websites tailored to your needs.',
      icon: '🌐',
    },
    {
      title: 'Graphic Design',
      description: 'Creating visually stunning designs for your brand.',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      description: 'Promoting your business online effectively.',
      icon: '📈',
    },
    // Add more services as needed
  ];

  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mt-8 ">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
