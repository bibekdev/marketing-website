import HomeAnimation from '../components/HomeComponent/HomeAnimation'
import Layout from '../components/Layout'
import MarketingStrategy from '../components/HomeComponent/MarketingStrategy'
import WhyStrategy from '../components/HomeComponent/WhyStrategy'

const Home = () => {
  return (
    <Layout>
      <div className='px-32 sm:px-2'>
        <HomeAnimation />
        <MarketingStrategy />
        <WhyStrategy />
      </div>
    </Layout>
  )
}

export default Home
