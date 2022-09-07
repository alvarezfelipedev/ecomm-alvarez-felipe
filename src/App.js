import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <section>
    <ItemListContainer language= 'Spanish' greeting ='Hola' farewell ='Chau'/>
    <ItemListContainer language = 'English' greeting = 'Hello' farewell = 'Bye'/>
    <ItemListContainer language = 'Portuguese' greeting ='olá' farewell ='até a próxima'/>
    </section>
    </>
  );
}

export default App;
