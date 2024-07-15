
import '../Style/Card1.css'
import { TbTruckDelivery } from "react-icons/tb";
const Card1 = () => {
  return (
    <div className='container mein mt-4'>
<div className="row">
    <div className="col-lg-3">


    <div className=" usage">
Limited Usage
        </div>
<div className="icn">
<TbTruckDelivery style={{height:"37px", width:"33px"}}className='tb'/>
</div>
<div className="select">
Selected Sellers
</div>

    </div>
    <div className="col-lg-3  mt-3">
        <h2 className='ab'>100% OFF</h2>
<h3>Min. Spend Rs.399<br></br>Capped at Rs.180</h3>
<h4 className='mt-3'>Valid till 31 May 2024</h4>
        

    </div>
    <div className="col-lg-3"></div>
    <div className="col-lg-3">
        <div className="ca mt-4">
T & C &gt;
        </div>
        <div className="bt">
            Collect Now
        </div>
    </div>
</div>









    </div>
  )
}

export default Card1