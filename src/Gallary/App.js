import {Routes ,Route} from "react-router-dom";
import Gallary from './Gallary';
import Nav from './Nav';
import Data from "./Data";
import About from "./About";
import ContactUs from"./ContactUs";
import Category from "./category";
const App=() =>{
  return (
    <div>
      <Nav />
      
        
         
     <Routes>
     
      <Route path="/" element={<Gallary Data={Data} />} />
      <Route path="Home" element={<Gallary Data={Data} />} />
      <Route path="About" element={<About />} />
      <Route path="category" element={<Category />} />
      <Route path="ContactUS" element={<ContactUs />} />
     </Routes>
     
    </div>
  )
}

export default App;
