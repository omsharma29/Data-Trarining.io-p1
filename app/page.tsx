
import NavHeroLayout from './Layouts/Herolayout';
import FeaturesWhyLayout from './Layouts/FeaturesLayout';
import TrustedCallFooterLayout from './Layouts/TrustedCallFooterLayout';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavHeroLayout />
      <FeaturesWhyLayout />
      <TrustedCallFooterLayout/>
    </div>
  );
};

export default Index;
