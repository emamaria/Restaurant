

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './main.scss'
import MainRoutes from './routes/main/MainRoutes';

function App() {
    
  
  return (
    <div className="App" >
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
