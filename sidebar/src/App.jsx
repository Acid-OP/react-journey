import './index.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from '../pages/home';
import Products from '../pages/products';
import Reports from '../pages/reports';
import Navbar from '../components/navbar';
import Messages from '../pages/messsages';
import Supports from '../pages/supports';
import Team from '../pages/team';
function App () {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='reports' exact Component={Reports}/>
          <Route path='products' exact Component={Products}/>
          <Route path='messages' exact Component={Messages}/>
          <Route path='support' exact Component={Supports}/>
          <Route path='team' exact Component={Team}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;