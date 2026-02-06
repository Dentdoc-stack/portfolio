import { motion } from 'framer-motion'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import Button from '../ui/Button'
import { personalInfo } from '../../data/content'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="primary"
            >
              Get In Touch
              <FaArrowRight className="ml-2" />
            </Button>
            <Button 
              href="/dashboards"
              variant="outline"
            >
              View Dashboards
            </Button>
            <Button 
              href="/cv/resume.pdf" 
              download 
              variant="secondary"
            >
              <FaDownload className="mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
