
import './App.css';
import Footer from './Components/Footer/Footer';
import HelpBot from './Components/helpbot/HelpBot';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
    <AllRoutes/>
    <HelpBot/>
    <Footer/>
    </div>
  );
}

export default App;
