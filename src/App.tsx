import Header from "./Header";
import planetData from "./data/data.json";
import PlanetPage from "./PlanetPage";
import { useState } from "react";

type PlanetSection = {
  content: string;
  source: string;
};

export type Planet = {
  name: string;
  overview: PlanetSection;
  structure: PlanetSection;
  geology: PlanetSection;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
};

const data: Planet[] = planetData;

function App() {
  // Use state to store selected planet
  const [selectedPlanetName, setSelectedPlanet] = useState<string>("Mercury");

  // Use .find to find the planet associated with that name
  const selectedPlanet = data.find(
    (planet) => planet.name === selectedPlanetName,
  );

  // Call a function to change the selected planet dependent on click and set in state variable
  function handlePlanetChange(name: string) {
    setSelectedPlanet(name);
  }

  return (
    <>
      <Header changePlanet={handlePlanetChange} />
      <PlanetPage selectedPlanet={selectedPlanet} />
    </>
  );
}

export default App;
