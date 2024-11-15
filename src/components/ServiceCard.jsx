// components/ServiceCard.js
const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="bg-stone-200 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  