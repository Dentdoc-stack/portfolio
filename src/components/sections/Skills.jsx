import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase,
  FaVuejs, FaAngular, FaJs, FaHtml5, FaCss3, FaAws 
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss,
  SiExpress, SiGraphql, SiGooglecloud, SiKubernetes
} from 'react-icons/si'
import { skills } from '../../data/content'

const iconMap = {
  'React': <FaReact className="text-blue-500" />,
  'Vue.js': <FaVuejs className="text-green-500" />,
  'Angular': <FaAngular className="text-red-500" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'JavaScript': <FaJs className="text-yellow-500" />,
  'HTML/CSS': <FaHtml5 className="text-orange-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Python': <FaPython className="text-yellow-600" />,
  'Express': <SiExpress className="text-gray-700" />,
  'GraphQL': <SiGraphql className="text-pink-500" />,
  'Google Cloud Platform': <SiGooglecloud className="text-blue-500" />,
  'Docker': <FaDocker className="text-blue-600" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700" />,
  'Git': <FaGitAlt className="text-orange-600" />,
};

const Skills = () => {
  return (
    <Section id="skills" className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle subtitle="Technologies I work with">
          Skills & Technologies
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold text-primary-600 mb-4">
                  {category}
                </h3>
                <div className="space-y-3">
                  {techs.map((tech) => (
                    <div key={tech} className="flex items-center space-x-3">
                      <span className="text-2xl">
                        {iconMap[tech] || <FaDatabase className="text-gray-500" />}
                      </span>
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
