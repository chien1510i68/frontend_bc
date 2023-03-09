import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from "../../ReduxMoudules"

const ProductMale = (props) => {
    let {prodmale,addToCart} = props
    return (
        <>
            
           
                  <div className="seller-item col-lg-3 col-md-4 col-sm-6 relative ">
                      <div href="" className="seller-product">
                          <a href="" className="seller-img">
                                <img src={prodmale.image} alt="" />
                          </a>
                          <div className="seller-discount absolute top-[10px] left-[20px] w-[45px] h-[36px] rounded-[20px] px-[15px] text-[#fff] font-medium py-[5px] bg-[#e12b2b]">{prodmale.discount}%</div>
                          <button  className="seller-btn" onClick={() =>addToCart(prodmale)} ><span>Thêm vào giỏ</span></button>
                      </div>
                      <div className="seller-description">
                          <a href="" className="seller-description-title"><p>{prodmale.category}</p></a>
                          <a href="" className="seller-description-title"><h4>{prodmale.name}</h4></a>
                          <div className="seller-price">
                              <span>{prodmale.price} ₫</span>
                              <span className="initial-price">{prodmale.oldPrice} ₫</span>
                          </div>
                      </div>
                  </div> 
        </>
    );
};
const mapDispatchToProps = {addToCart}
export default connect(null , mapDispatchToProps) (ProductMale);