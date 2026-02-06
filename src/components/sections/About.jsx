import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo } from '../../data/content'

const About = () => {
  return (
    <Section id="about" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle subtitle="Get to know me better">
          About Me
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm <span className="font-semibold text-primary-600">{personalInfo.name}</span>, 
              a passionate developer based in {personalInfo.location}.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in building scalable web applications and creating interactive 
              dashboards that turn complex data into actionable insights. With expertise in 
              modern JavaScript frameworks and cloud technologies, I bring ideas to life 
              with clean, efficient code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
