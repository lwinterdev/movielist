import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/Header';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Movie from './components/Movie';

//router
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {

 
  return (
    <Router>
      <div className="App">
        
          <Header/>
          <Routes>
            
            <Route path="/movielist/:movieId" element={<Movie/>}/>
            <Route path="/movielist" element={<Home/>}/>
          </Routes>
          
                

          <div className='App-divider'></div>
        

          <div className='App-header'></div>
        
      </div>
    </Router>
  );
}



export default App;
