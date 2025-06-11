
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TechOverview from '../components/home/TechOverview';
import UseCases from '../components/home/UseCases';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <TechOverview />
      <UseCases />
    </Layout>
  );
};

export default Index;
