import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from "../../ReduxMoudules"
const ProductFemale = (props) => {
    let {prodfemale , addToCart } = props
    return (
        <>
            
           
                  <div className="seller-item col-lg-3 col-md-4 col-sm-6 relative ">
                      <div href="" className="seller-product">
                          <a href="" className="seller-img">
                                <img src={prodfemale.image} alt="" />
                          </a>
                          <div className="seller-discount absolute top-[10px] w-[45px] h-[36px] left-[20px] rounded-[20px] px-[15px] text-[#fff] font-medium py-[5px] bg-[#e12b2b]">{prodfemale.discount}%</div>
                          <button  className="seller-btn" onClick={() =>addToCart(prodfemale)}><span>Thêm vào giỏ</span></button>
                      </div>
                      <div className="seller-description">
                          <a href="" className="seller-description-title"><p>{prodfemale.category}</p></a>
                          <a href="" className="seller-description-title"><h4>{prodfemale.name}</h4></a>
                          <div className="seller-price">
                              <span>{prodfemale.price} ₫</span>
                              <span className="initial-price">{prodfemale.oldPrice} ₫</span>
                          </div>
                      </div>
                  </div> 
        </>
    );
};
const mapDispatchToProps = {addToCart}
export default connect(null , mapDispatchToProps)(ProductFemale);
// export default ProductFemale