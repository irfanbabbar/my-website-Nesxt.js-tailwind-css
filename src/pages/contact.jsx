// pages/contact.js
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mt-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto mt-10">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
