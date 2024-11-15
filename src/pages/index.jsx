// pages/index.js
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import '../../styles/globals.css';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Web Development"
            description="Building responsive and modern websites."
            icon="🌐"
          />
          <ServiceCard
            title="Graphic Design"
            description="Creating visually stunning designs."
            icon="🎨"
          />
          <ServiceCard
            title="Digital Marketing"
            description="Promoting your business online effectively."
            icon="📈"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
