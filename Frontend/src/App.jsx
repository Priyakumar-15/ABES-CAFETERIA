import "./App.css";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import Login from './Pages/Login'
import SignUp from './Pages/SignUP'
import MenuPage from './Pages/MenuPage'

const App = () => {
  return (
  
  <Router>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/success" element={<Success/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signup" element={<SignUp/>}/>
      
       <Route path="/menu" element={<MenuPage/>} />
       <Route path ='*' element={<NotFound/>}/>
    
    </Routes>
    <Toaster />
  </Router>

);
};

export default App;