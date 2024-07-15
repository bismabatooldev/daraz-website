import { product } from "../Data/Api"
import "../Style/Product.css"
import { Link } from "react-router-dom"

const Product = () => {
  return (
   
    <div className="container">
      <div className="row">
      {product.products.map((x)=>{
        return(
            <div key={x.id} className="col-md-3 p-3 mt-4 text-center">
 <div className="card" style={{width: '18rem'}}>
<Link to={`/product/${x.id}`}><img src={x.thumbnail} className="card-img-top w-75 m-auto" style={{aspectRatio:3/2 , objectFit:'contain'}} alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title">{x.title.slice(0,10)}...</h5>
    <p className="card-text">{x.description.slice(0,50)}...</p>
    <button className="btn-12 button"><span>Buy Now</span></button>


  </div>
</div>

            </div>
        )
      })}
      </div>
    </div>

  )
}

export default Product


   
    


