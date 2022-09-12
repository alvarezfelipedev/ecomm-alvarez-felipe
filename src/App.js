import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section>
        <ItemCount initial={1} stock={10} />
        <ItemListContainer/>
      </section>
    </>
  );
}

export default App;
