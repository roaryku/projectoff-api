
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppNutrition from './nutrition/AppNutrition';
import Bread from './bread/Bread';
import Recipes from './recipes/Recipes';
import Home from './Home';

function App() {
     return <Router>
<div className='nav'>
      <Link to = '/' className='link'>Home</Link>
      <Link to = '/bread/Bread' className='link'>Bread Recipes</Link>
      <Link to = '/recipes/Recipes' className='link'>Food Recipes</Link>
      <Link to = '/nutrition/AppNutrition' className='link'>Nutrition Analysis</Link>
     </div>
   

     <Routes>
      <Route path = "/"  element = {<Home/>}/>
      <Route path = "/bread/Bread" element = {<Bread/>} />
      <Route path = "/recipes/Recipes" element = {<Recipes/>} />
      <Route path = "/nutrition/AppNutrition" element = {<AppNutrition/>} />
     </Routes>
     </Router>

     
     
}

export default App;
