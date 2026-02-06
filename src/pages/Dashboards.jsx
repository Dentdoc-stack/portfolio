import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import DashboardCard from '../components/DashboardCard'
import { dashboards } from '../data/content'

const Dashboards = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Interactive data visualization projects hosted on Google Cloud Platform">
            My Dashboards
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboards.map((dashboard, index) => (
              <DashboardCard 
                key={dashboard.id} 
                dashboard={dashboard} 
                index={index}
              />
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-primary-50 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built with Modern Technologies
              </h3>
              <p className="text-gray-700 text-lg">
                All dashboards are built using modern web technologies and deployed on 
                Google Cloud Platform using Cloud Run. They feature responsive design, 
                real-time data updates, and interactive visualizations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Dashboards;
