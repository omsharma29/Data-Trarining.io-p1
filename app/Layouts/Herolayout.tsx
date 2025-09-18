import Navbar from "../Pagecomponents/Navbar";
import Hero from "../Pagecomponents/Hero";

const NavHeroLayout = () => {
    return (
<div className="relative bg-gradient-to-br from-white via-emerald-200 to-emerald-500">
  {/* Gradient mask */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>

  {/* Navbar should always stay above */}
  <div className="relative z-10 max-w-6xl mx-auto">
    <Navbar />
    <Hero />
  </div>
</div>






    );
};

export default NavHeroLayout;
