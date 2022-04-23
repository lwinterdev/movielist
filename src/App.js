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
            <Route path="/" element={<Home/>}/>
            <Route path="/:movieId" element={<Movie/>}/>
            
          </Routes>
          
                

          <div className='App-divider'></div>
        

          <div className='App-header'></div>
        
      </div>
    </Router>
  );
}



export default App;
