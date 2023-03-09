import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from "../../ReduxMoudules"
const ProductHome = (props) => {
    let {prodhome,addToCart} = props
    return (
        <>
            
           
                  <div className="seller-item col-lg-3 col-md-4 col-sm-6 relative ">
                      <div href="" className="seller-product">
                          <a href="" className="seller-img">
                                <img src={prodhome.image} alt="" />
                          </a>
                          <div className="seller-discount absolute top-[10px] left-[20px] w-[45px] h-[36px] rounded-[20px] px-[15px] text-[#fff] font-medium py-[5px] bg-[#e12b2b]">{prodhome.discount}%</div>
                          <button  className="seller-btn" onClick={() => addToCart(prodhome)}><span>Thêm vào giỏ</span></button>
                      </div>
                      <div className="seller-description">
                          <a href="" className="seller-description-title"><p>{prodhome.category}</p></a>
                          <a href="" className="seller-description-title"><h4>{prodhome.name}</h4></a>
                          <div className="seller-price">
                              <span>{prodhome.price} ₫</span>
                              <span className="initial-price">{prodhome.oldPrice} ₫</span>
                          </div>
                      </div>
                  </div> 
        </>
    );
};
const mapDispatchToProps = {addToCart}
export default connect(null , mapDispatchToProps)(ProductHome);