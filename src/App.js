

import Footer from './components/footer/Footer';
import './main.scss'
import MainRoutes from './routes/main/MainRoutes';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
