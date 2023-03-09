import Slider from "react-slick";
import { connect } from "react-redux";
import ProductMale from "./ProductMale";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './Male.scss'

function Male(props) {
 
  let {listProductMale} = props
    return ( 
      <>
      
       <div className="row  mx-[100px]">
        
          {listProductMale.map(item =>
            <ProductMale prodmale = {item} key={item.id}/>
            )}  
       </div>
      
      </>
     );
}
const mapStateToProps = (state) => ({
  listProductMale : state.prdsMale
});

export default connect (mapStateToProps) (Male);