import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './containers/ItemDetailContainer';
// import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section>
        {/* <ItemListContainer /> */}
        <ItemDetailContainer/>
      </section>
    </>
  );
}

export default App;
