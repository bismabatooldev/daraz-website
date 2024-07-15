import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Productdetail from "./Pages/Productdetail"
import Login from "./Pages/Login"
import Register from "./Pages/Register"


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:id" element={<Productdetail/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
   
   
      </Routes>
    
  )
}

export default App
