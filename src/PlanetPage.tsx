import { useState } from "react";

import type { Planet } from "./App";

type Props = {
  selectedPlanet: Planet | undefined;
};

export default function PlanetPage({ selectedPlanet }: Props) {
  // Set active tab state and change using onclick
  const [activeTab, setActiveTab] = useState("overview");

  // Fallback incase no planet is selected
  if (!selectedPlanet) {
    return <div>Loading...</div>;
  }

  // Declare variables before initialisation
  let content;
  let image;
  let hoverImage;

  // Change content dependant on state
  if (activeTab === "overview") {
    content = selectedPlanet.overview.content;
    image = selectedPlanet.images.planet;
  }

  if (activeTab === "internal") {
    content = selectedPlanet.structure.content;
    image = selectedPlanet.images.internal;
  }

  if (activeTab === "geology") {
    content = selectedPlanet.geology.content;
    image = selectedPlanet.images.planet;
    hoverImage = selectedPlanet.images.geology;
  }

  return (
    <>
      <div className="planet-info-container">
        <div>
          <img src={image} />
          <img src={hoverImage} />
        </div>
        <div>
          <div>
            <h1>{selectedPlanet.name}</h1>
            <p>{content}</p>
          </div>
          <div>
            <button onClick={() => setActiveTab("overview")}>Overview</button>
            <button onClick={() => setActiveTab("internal")}>
              Internal Stucture
            </button>
            <button onClick={() => setActiveTab("geology")}>
              Surface Geology
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
