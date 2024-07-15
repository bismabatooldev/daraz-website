import { useParams } from "react-router-dom"
import { product } from "../Data/Api";
import "../Style/Productdetail.css"
import ReactImageMagnify from 'react-image-magnify';



const Productdetail = () => {

  const {id} = useParams();
  const getdata = product.products.find((x)=>x.id == id)
  console.log(getdata)
  
  return (
  
    <div className="container bootdey mt-4" style={{cursor:"pointer"}}>
    <div className="col-md-12">
      <section className="panel">
        <div className="panel-body row">
          <div className="col-md-6">
            <div className="pro-img-details  ">
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: getdata.thumbnail
    },
    largeImage: {
        src: getdata.thumbnail,
        width: 800,
        height: 1000,


    },
    enlargedImagePosition: "over"
}} />
            
            </div>
            <div className="d-flex  mb-5 my-3 justify-content-around ">
{getdata.images.map((x)=>{
    console.log(x)
    return <img key={x}  src={x} alt=""  className=" img-fluid" style={{width:"120px" , height:"130px" , cursor:"pointer"}}></img>
})}

      </div>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pro-d-title text-center fs-2 fw-medium mb-3">
              <a href="#" className="text-decoration-none text-dark">
             {getdata.title}
              </a>
            </h4>
            <p>
             {getdata.description}
            </p>
            <div className="product_meta">
              <span className="posted_in"> <strong>Categories: </strong> <a rel="tag" href="#">{getdata.category}</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
              <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.</span>
            </div>
            <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">{getdata.price}</span>  <span className="pro-price"> $300.00</span></div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="quantiy" placeholder={getdata.quantity} className="form-control quantity" />
            </div>
            <p>
              <button className="btn btn-round btn-dark bolt w-24" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>


  )
}

export default Productdetail
