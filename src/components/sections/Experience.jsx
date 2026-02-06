import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa'
import { experience } from '../../data/content'

const Experience = () => {
  return (
    <Section id="experience" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle subtitle="My professional journey">
          Work Experience
        </SectionTitle>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaBriefcase className="text-primary-600 text-xl" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.position}
                      </h3>
                      <span className="text-primary-600 font-medium">
                        {job.duration}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-600 mb-3">
                      {job.company}
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {job.description}
                    </p>
                    <div className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience;
