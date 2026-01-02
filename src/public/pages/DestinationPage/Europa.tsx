import { PlanetCard } from "../../../components";
import europaImg from "../../../assets/destination/image-europa.png";
export const Europa = () => {
  return (
    <PlanetCard
      title="Europa"
      description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin."
      distance="628 mil. km"
      time="3 years"
      img={europaImg}
    />
  );
};
