import logo from './logo.svg';
import './App.css';
import Home from './sub/Home';
import Movied from './sub/Movied';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 <Router>
<Routes>

<Route index element={<Home />}></Route>

<Route path="movie/:imdbID" element={<Movied />}></Route>
<Route path="/*" element={<h1>Error</h1>}></Route>

</Routes>

 </Router>
    </div>



  );
}

export default App;
