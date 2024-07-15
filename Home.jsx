import Carasole from "../Components/Carasole"
import Navbar from "../Components/Navbar"
import  Bar from "../Components/Bar"
import Card1 from "../Components/Card1"
import Footer from "../Components/Footer"
import Cards from "../Components/Cards"
import Product from "./Product"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carasole/>
      <Bar/>
      <Card1/>
      <Cards/>
      <Product/>
   
      <Footer/>
    </div>
  )
}

export default Home
