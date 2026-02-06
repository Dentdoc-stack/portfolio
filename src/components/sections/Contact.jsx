import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo } from '../../data/content'

const Contact = () => {
  return (
    <Section id="contact" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle subtitle="Let's build something amazing together">
          Get In Touch
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary-600 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-gray-900 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-gray-700 text-xl" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-gray-700 text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-gray-700 mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <Button 
                href={`mailto:${personalInfo.email}`}
                variant="primary"
              >
                <FaEnvelope className="mr-2" />
                Send me an email
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
