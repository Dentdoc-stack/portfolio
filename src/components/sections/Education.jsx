import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { education } from '../../data/content'

const Education = () => {
  return (
    <Section id="education" className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle subtitle="My academic background and certifications">
          Education
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      {edu.degree.toLowerCase().includes('certif') ? (
                        <FaCertificate className="text-primary-600 text-xl" />
                      ) : (
                        <FaGraduationCap className="text-primary-600 text-xl" />
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                      <span className="text-primary-600 font-medium text-sm sm:text-base">
                        {edu.duration}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-600 mb-3">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-700">
                      {edu.description}
                    </p>
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

export default Education;
