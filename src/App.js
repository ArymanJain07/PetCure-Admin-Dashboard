
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import CardComponent from './adminPanelComponents/CardComponent';
import HomeMain from './adminPanelComponents/HomeMain';
import Navbar from './adminPanelComponents/Navbar';
import "./assets/css/style.css";
import AddNewVet from './adminPanelComponents/AddNewVet';
function App() {
  return (
    
    <>

    <Router>
      <Navbar />
      <CardComponent />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path='/addVet' element={<AddNewVet />} />
      </Routes>
    </Router>



    {/* <Navbar />

    <CardComponent />
    <HomeMain /> */}
    
    </>

  );
}

export default App;
