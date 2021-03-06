import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/Header';
import Home from './components/Home';
//import Notfound from './components/Notfound';
import Movie from './components/Movie';
import ScrollToTop from './components/ScrollToTop';

//router
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {

 
  return (
    <Router>
      <div className="App">
        
          <Header/>
          
          <Routes>
            
            <Route path="/:movieId" element={<Movie/>}/>
            <Route path="/movielist" element={<Home/>}/>
            <Route path="/*" element={<Home/>}/>
            
          </Routes>
          
        
      </div>
      <ScrollToTop/>
    </Router>
  );
}



export default App;
