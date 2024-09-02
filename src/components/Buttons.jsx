import satData from "./satData";
// import Styling from "./components/styling";
// className="flex-container"

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}> All Orbits</button>
    </div>
  );
};

export default Buttons;
