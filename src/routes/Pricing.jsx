import Navbar from "../components/Navbar/Navbar"
import HeroImages from "../components/HeroImages/HeroImages"
import PricingCard from "../components/PricingCard/PricingCard"
import Footer from "../components/Footer/Footer"

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImages heading='Pricing' text='Choose your trip' />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Pricing