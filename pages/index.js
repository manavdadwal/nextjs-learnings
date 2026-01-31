import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import QuoteSection from '../components/QuoteSection'
import KeyFeaturesSection from '../components/KeyFeaturesSection'
import GlimpseSection from '../components/GlimpseSection'
import ProgramsSection from '../components/ProgramsSection'
import LaunchingSection from '../components/LaunchingSection'
import ProfessionalsSection from '../components/ProfessionalsSection'
import FacilitiesSection from '../components/FacilitiesSection'
import CoachesEventsSection from '../components/CoachesEventsSection'

export default function Home() {
  return (
    <Layout title="SSA Hunter Valley | Signature Slam Academy">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <KeyFeaturesSection />
      <GlimpseSection />
      <ProgramsSection />
      <LaunchingSection />
      <ProfessionalsSection />
      <FacilitiesSection />
      <CoachesEventsSection />
    </Layout>
  )
}
