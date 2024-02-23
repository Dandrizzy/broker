import Card from "../Features/Home/Card";
import Cards from "../Features/Home/Cards";
import Intro from "../Features/Home/Intro";

const Home = () => {
 return (
  <div className="pt-8">
   <div className="bg-blue-400">
    <Intro />
   </div>

   <Cards />
   <Card />
  </div>
 );
};

export default Home;