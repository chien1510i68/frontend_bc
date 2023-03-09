import Slider from "react-slick";
import { connect } from "react-redux";
import ProductHome from "./ProductHome";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './Home.scss'

function Home(props) { 
  let {listProductHome} = props
    return ( 
      <>
      
       <div className="row mx-[100px]">
        
          {listProductHome.map(item =>
            <ProductHome prodhome = {item} key={item.id}/>
            )}  
       </div>
      
      </>
     );
}
const mapStateToProps = (state) => ({
  listProductHome : state.prdsHome
});

export default connect (mapStateToProps) (Home);