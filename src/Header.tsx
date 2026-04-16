type Props = {
  changePlanet: (name: string) => void;
};

export default function Header({ changePlanet }: Props) {
  return (
    <header>
      <div className="header-container">
        <div className="planets-header">
          <h1> The Planets</h1>
        </div>
        <div className="planet-names">
          <button onClick={() => changePlanet("Mercury")}>Mercury</button>
          <button onClick={() => changePlanet("Venus")}>Venus</button>
          <button onClick={() => changePlanet("Earth")}>Earth</button>
          <button onClick={() => changePlanet("Mars")}>Mars</button>
          <button onClick={() => changePlanet("Jupiter")}>Jupiter</button>
          <button onClick={() => changePlanet("Saturn")}>Saturn</button>
          <button onClick={() => changePlanet("Uranus")}>Uranus</button>
          <button onClick={() => changePlanet("Neptune")}>Neptune</button>
        </div>
      </div>
    </header>
  );
}
