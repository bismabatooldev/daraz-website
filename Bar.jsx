// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import RotateLeftIcon from '@mui/icons-material/RotateLeft';
// import LoyaltyIcon from '@mui/icons-material/Loyalty';
// import VerifiedIcon from '@mui/icons-material/Verified';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnBold } from "react-icons/pi";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { MdVerifiedUser } from "react-icons/md";
import "../Style/List.css"
const Bar = () => {
  return (
    < div className=''>
       
       <div className="container line mt-3 ">
    <div className="row">
        <div className="col-lg-2 font"><AiFillSafetyCertificate style={{height:"28px", width:"25px"}}/>  Safe Payments </div>
        <div className="col-lg-2 font">< TbTruckDelivery style={{height:"28px", width:"25px"}}/>  Nationwide Delivery</div>
        
        <div className="col-lg-2 font"><PiKeyReturnBold style={{height:"28px", width:"25px"}}/>  Free & Easy Returns</div>
        <div className="col-lg-2 font"><LocalOfferIcon style={{height:"28px", width:"25px"}}/>  Best Garanteed </div>

        <div className="col-lg-2 font"><CheckCircleOutlineIcon style={{height:"28px", width:"25px"}}/>  100% Authentic</div>
        <div className="col-lg-2 font"><MdVerifiedUser style={{height:"28px", width:"25px"}}/>  Daraz Verified</div>
    </div>
</div>

    
         </div>
  )
  
}

export default Bar










        
