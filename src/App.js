import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Hola Mundo' />
    </div>
  );
};

export default App;