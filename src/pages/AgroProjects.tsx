import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Activity, Droplet, Sun, ArrowRight, Sprout, TrendingUp, Landmark, Download, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const AgroProjects = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const projects = [
    {
      number: "01",
      title: "Hydroponic Farm",
      image: "https://images.unsplash.com/photo-1626810635364-1ff332781cd6?auto=format&fit=crop&q=80"
    },
    {
      number: "02",
      title: "Plant Nursery",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80"
    },
    {
      number: "03",
      title: "Turmeric Plantations",
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?auto=format&fit=crop&q=80"
    },
    {
      number: "04",
      title: "Mango Cultivation",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80"
    },
    {
      number: "05",
      title: "Jamun Cultivation",
      image: "https://images.unsplash.com/photo-1642414998277-e7e95762d55c?auto=format&fit=crop&q=80"
    },
    {
      number: "06",
      title: "Sunflower Cultivation",
      image: "https://images.unsplash.com/photo-1593591513709-9c3392b071ca?auto=format&fit=crop&q=80"
    },
    {
      number: "07",
      title: "Safflower Cultivation",
      image: "https://images.unsplash.com/photo-1583849222644-a56069fc5407?auto=format&fit=crop&q=80"
    },
    {
      number: "08",
      title: "High-tech Soyabean Cultivation",
      image: "https://images.unsplash.com/photo-1558818061-19517daece0a?auto=format&fit=crop&q=80"
    },
    {
      number: "09",
      title: "Sesame Cultivation",
      image: "https://images.unsplash.com/photo-1586265249248-d0329c5fad44?auto=format&fit=crop&q=80"
    },
    {
      number: "10",
      title: "Mushroom Cultivation",
      image: "https://images.unsplash.com/photo-1595921108322-4a168590fc2e?auto=format&fit=crop&q=80"
    }
  ];

  const marketTrends = [
    {
      number: "01",
      title: "Changing Consumer Tastes",
      description: "Wide array of products, coupled with increasing global connectivity, has led to a change in the tastes and preference of domestic consumers. This trend has been bolstered by rising incomes, increasing urbanisation, a young population and the emergence of nuclear families. Consumer preference is moving towards healthier snacks."
    },
    {
      number: "02",
      title: "Expansion Of International Companies",
      description: "International companies are expanding their presence in the Indian market, bringing advanced agricultural technologies and practices."
    },
    {
      number: "03",
      title: "Rising Demand On Indian Products In International Market",
      description: "Indian agricultural products are seeing increasing demand in international markets due to their quality and competitive pricing."
    },
    {
      number: "04",
      title: "Emphasis On Healthier Ingredients",
      description: "Consumers worldwide are emphasizing healthier, more natural ingredients, creating opportunities for organic and sustainable farming."
    },
    {
      number: "05",
      title: "Higher Consumption of Horticulture Crops",
      description: "There is a significant increase in the consumption of horticulture crops globally, offering new market opportunities."
    },
    {
      number: "06",
      title: "Product Innovation as the Key to Expansion",
      description: "Innovation in agricultural products and processing techniques is driving market expansion and creating new consumer segments."
    },
    {
      number: "07",
      title: "Strengthening Procurement via Direct Farmer-Firm Linkages",
      description: "Direct linkages between farmers and firms are strengthening procurement channels and improving value chains."
    },
    {
      number: "08",
      title: "Agriculture Output/Outlook",
      description: "The overall agricultural output and outlook remains positive with sustainable growth projections."
    }
  ];

  const advantages = [
    {
      title: "Robust Demand",
      description: "Strong domestic and international demand for Indian agricultural products"
    },
    {
      title: "Attractive Opportunities",
      description: "Multiple investment and growth opportunities across the agricultural value chain"
    },
    {
      title: "Policy Support",
      description: "Favorable government policies and initiatives supporting agricultural development"
    },
    {
      title: "Competitive Advantages",
      description: "Natural resources, climate diversity, and skilled workforce providing competitive edge"
    }
  ];

  const specialtyProjects = [
    {
      title: "ETF Millets",
      description: "India produces all the nine commonly known millets and is the largest producer and the second largest exporter of millets in the world. Millets are termed as Nutri-cereals because of their high nutritional qualities and also a crop suited for the changing climate. It has been an integral part of diet in the past owing to its nutritional, functional and nutraceutical properties.",
      details: "Though millets are known as super food, the consumption and also the production were declined over the past decades and millet processing neglected. The main reason behind this is the lack of awareness of its nutritional properties, low knowledge on the method of cooking, non-availability of suitable processing technologies or machinery, non-availability of Ready to Eat (RTE) and Ready to Cook (RTC) products besides millets being perishable with low shelf life and the processing and cooking being laborious, and time-consuming. A step towards to create demand and to promote millets from farm to plate, ICAR-lndian Institute of Millets Research (IIMR) has taken an initiation and developed diversified millet recipes for breakfast, lunch, snacks, beverages and etc. to include in our daily diet. These tasty and healthy millet recipes will increase the consumption can also reduce the malnutrition in the general public. Millet promotion can also be done through Public funded schemes like ICDS and Mid-Day Meal programmes.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8c6?auto=format&fit=crop&q=80"
    },
    {
      title: "Stevia Farming",
      description: "Stevia as the healthiest sweetener with many medicinal properties is a wonderful gift from nature. Its true potential was discovered by the ancient wisdom of a warrior race living in the rain forests of South America.",
      details: "Modern science brought the benefits of Stevia to the common people. Tireless works of countless scientists and technologists made the benefits of Stevia accessible to us. Now we have pretty standardized knowledge of the cultivation technique of Stevia, its extraction and purification process and application.",
      image: "https://images.unsplash.com/photo-1621955542498-031dff490acc?auto=format&fit=crop&q=80"
    },
    {
      title: "Vegan Recipes",
      description: "Under global restaurant chain, \"DELICIOUS VEGAN\" we will deliver wide, healthy, tasty vegan recipes as stated in our downloads.",
      details: "",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
    },
    {
      title: "Soya Milk",
      description: "Soy beverages are consumed because of the increased availability of soy, and the scientific facts that prove the many health benefits of the beans; including lowering blood cholesterol and reducing the risk of certain cancers.",
      details: "Additionally, soy beverages are consumed as a replacement for lesser-healthy drinks because of higher nutrition content. Soybean-based foods, apart from being a complete source of protein, also contain other important nutrients, such as fiber, vitamin B and omega3 fatty acids. All these nutrients play an important role in the growth of infants, fetal growth in pregnant women, and provide various other benefits for children and adults alike. The rising health consciousness in the developing and developed regions is driving the soy beverages market. It is a healthy alternative to meat and other animal products and hence, is a good source of protein for vegetarians.",
      image: "https://images.unsplash.com/photo-1559722585-2ba4cb99dbae?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-green-600 to-green-400">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
            alt="Agro Projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Agro Projects
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Sustainable agricultural initiatives for growth, innovation, and food security
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Agro Projects Brochures
            </button>
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-600 mb-8">Agro Projects</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl italic text-gray-700 mb-3">
                "Self-belief and hard work will always earn you success."
              </p>
              <p className="text-xl italic text-gray-700">
                "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Soya Milk Card */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1504868584283-28856f57de72?auto=format&fit=crop&q=80"
                  alt="Soya Milk"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Soya Milk</h3>
                <p className="text-gray-700 mb-6">
                  Soy beverages and products market Soy beverages are consumed because of the increased availability of soy, and the scientific facts that prove the many health benefits of the beans; including lowering blood cholesterol and reducing the risk of certain cancers. Additionally, soy beverages are consumed as a replacement for lesser-healthy drinks because of higher nutrition content.
                </p>
                <Link to="#" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
                  Know More
                </Link>
              </div>
            </div>

            {/* Millets Card */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e8c6?auto=format&fit=crop&q=80"
                  alt="Millets"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Millets</h3>
                <p className="text-gray-700 mb-6">
                  India produces all the nine commonly known millets and is the largest producer and the second largest exporter of millets in the world. Millets are termed as Nutri-cereals because of their high nutritional qualities and also a crop suited for the changing climate. It has been an integral part of diet in the past owing to its nutritional, functional and nutraceutical properties.
                </p>
                <Link to="#" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
                  Know More
                </Link>
              </div>
            </div>

            {/* Vegan Card */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
                  alt="Vegan"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Vegan</h3>
                <p className="text-gray-700 mb-6">
                  Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.
                </p>
                <Link to="#" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
                  Know More
                </Link>
              </div>
            </div>

            {/* Stevia Farming Card */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1621955542498-031dff490acc?auto=format&fit=crop&q=80"
                  alt="Stevia Farming"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Stevia Farming</h3>
                <p className="text-gray-700 mb-6">
                  Stevia as the healthiest sweetener with many medicinal properties is a wonderful gift from nature. Its true potential was discovered by the ancient wisdom of a warrior race living in the rain forests of South America. Modern science brought the benefits of Stevia to the common people.
                </p>
                <Link to="#" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-900">Some Words About Agro Projects</h2>
              <p className="text-gray-700 mb-6">
                Mahasamvit will be global ag-ecosystem intelligence provider. Mahasamvit's suite of products enables various stakeholders in the agri-ecosystem, including financial services providers, to adopt and drive digital strategy across their agricultural operations.
              </p>
              <p className="text-gray-700 mb-6">
                Using cutting-edge technology like artificial intelligence, machine learning, and remote sensing, Mahasamvit will create an intelligent, interconnected data platform. Mahasamvit agritech helps organizations digitize their operations from farm to fork and leverage near real-time farm data and actionable insights to make effective decisions.
              </p>
              <p className="text-gray-700 mb-6">
                Mahasamvit agritech- The R&D Department efficiently supports:
              </p>
              <ul className="list-inside text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Evaluation of new and current formulations in different agro-eco regions of the country.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Promotion and creating awareness about the new products.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Channelizing information to consumers for the right technical use.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Developing interface with the State Departments of Agriculture.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Training of agri-input dealers & farmers.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Registration of pesticides and label expansion on crops by generating scientific data on different parameters like bio-efficacy, residue, persistence, toxicity etc.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>Development of innovative and safer formulation which inhibits safe and environmental friendly approach.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
                alt="Modern Agriculture"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Projects</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore our diverse range of agricultural projects designed for sustainability and profitability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-green-900">{project.title}</h3>
                    <span className="text-green-600 font-bold">{project.number}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Rising Demand Of Indian Products In International Market</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Key trends shaping the future of agricultural business and export opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketTrends.map((trend, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {trend.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-900">{trend.title}</h3>
                    <p className="text-gray-700">{trend.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage India Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Advantage India</h2>
            <p className="text-green-200 mt-4">
              India's unique position in the global agricultural landscape
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-green-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-green-200">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Specialty Projects</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Innovative agricultural initiatives with high market potential
            </p>
          </div>

          <div className="space-y-16">
            {specialtyProjects.map((project, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-2xl font-semibold mb-4 text-green-900">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  {project.details && <p className="text-gray-700">{project.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Mission & Vision</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              AGGROTECH AND AGRICULTURAL RESEARCH PROJECTS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-900">Vision</h3>
              <p className="text-gray-700 mb-4">
                To become an Indian Multinational Conglomerate who touches lives of millions through its high-quality products produced with advanced technologies and processes, serving customers globally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-900">Mission</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>To create a brand that is familiar and liked by every household within country.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>To become a true Indian MNC with Pan India presence and operations across the globe.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>To create best value proposition to investors, vendors & society.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <span>To uphold the principles of corporate governance.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6">
              Our aim is to produce results with a direct and positive impact on our client's objectives", by providing specialized quality services and innovative long-term solutions tailored to the specific needs of each client in the areas of agriculture and rural development; trade and economic development; social development; and in environmental and natural resource management.
            </p>

            <p className="text-gray-700 mb-6">
              We, are committed to accomplishing our mission by integrating the following core values in our vision:
            </p>

            <ul className="text-gray-700 space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Endeavour:</strong> To reach beyond the expectations the needs of our clients</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Quality:</strong> To ensure our clients the highest standards of technical assistance and professional management of services</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Innovation:</strong> To continuously expand our consultancy services across the world and to other sectors in order to constantly satisfy the diverse expectations of our clients</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Development:</strong> To help communities in the developing world find sustainable solutions to sustainable agriculture, social, economic, and environmental issues, as our contribution to International Development.</span>
              </li>
            </ul>

            <p className="text-gray-700">
              MAHASAMVIT AGROTECH LTD. is a food and agri conglomerate, dedicated to improving the productivity of Indian farmers by innovating products and services that sustainably increase crop and livestock yields.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Core Values</h2>
          </div>

          <div className="bg-green-800 p-8 rounded-lg">
            <p className="mb-6">
              Personal lives are enriched by values, the same holds true for organizations. To be "the one" one has to operate in fair, humble and good faith. Likewise, we nurture our lofty aspirations honestly by integrity and solidarity.
            </p>
            <p className="mb-6">
              Our value system encourages us to foster the talent of internal public and satisfy the external public by good quality products. The Company firmly believes in transparency in its dealings and lays emphasis on integrity and regulatory compliance.
            </p>
            <p>
              The Mahasamvit Group considers good corporate governance a prerequisite for meeting the needs and aspirations of its Shareholders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Ready to Invest in Sustainable Agriculture?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our agro projects team today to discuss investment opportunities and partnership possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              Explore Opportunities <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Investment Materials
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="agro-projects" />
    </motion.div>
  );
};

export default AgroProjects;
