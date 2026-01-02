import { PlanetCard } from "../../../components";
import marsImg from "../../../assets/destination/image-mars.png";
const Mars = () => {
  return (
    <PlanetCard
      title="MARS"
      description=" Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!"
      distance="225 mil. km"
      time="9 months"
      img={marsImg}
    />
  );
};
export default Mars;
