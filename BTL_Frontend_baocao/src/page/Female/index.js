import Slider from "react-slick";
import { connect } from "react-redux";
import ProductFemale from "./ProductFemale";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './Female.scss'

function Female(props) { 
  let {listProductFemale} = props
    return ( 
      <>
      
       <div className="row  mx-[100px]">
            {/* <h1>{listProductFemale.image}</h1> */}
        
          {listProductFemale.map(item =>
             <ProductFemale prodfemale = {item} key={item.id}/> 
            )}   
       </div>
      
      </>
     );
}
const mapStateToProps = (state) => ({
  listProductFemale : state.prdsFeMale
});

export default connect (mapStateToProps) (Female);