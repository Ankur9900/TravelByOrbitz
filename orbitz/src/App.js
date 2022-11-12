import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import HelpBot from './Components/helpbot/HelpBot';
import AllRoutes from './Routes/AllRoutes';

import { Loading } from './Components/feature/Loading';
import Main from './Components/feature/Search/Main';
import { Home } from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <AllRoutes />
      <Home />
      <HelpBot />
      <Footer />
    </div>
  );
}

export default App;
