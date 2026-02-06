import { motion } from 'framer-motion'
import Card from './ui/Card'
import Button from './ui/Button'
import { FaExternalLinkAlt } from 'react-icons/fa'

const DashboardCard = ({ dashboard, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full flex flex-col">
        {/* Icon/Emoji */}
        <div className="text-5xl mb-4">
          {dashboard.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {dashboard.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 flex-grow">
          {dashboard.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {dashboard.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Button */}
        <Button
          href={dashboard.url}
          target="_blank"
          variant="primary"
          className="w-full"
        >
          <FaExternalLinkAlt className="mr-2" />
          View Dashboard
        </Button>
      </Card>
    </motion.div>
  );
};

export default DashboardCard;
