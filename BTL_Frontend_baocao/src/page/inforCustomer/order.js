import React from 'react';
import { connect } from 'react-redux';
import {deleteItems , increace ,decrease , fixToCart} from "../../ReduxMoudules"
import {faClose, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Order(props) {
    let { increace, deleteItems , decrease ,fixToCart ,isDisplayFixCart} = props;
    let product ={...props.product};
    return (
        <div>
            <div className="flex mb-4">
                        {
                            isDisplayFixCart &&
                            <button onClick={()=> deleteItems(product.id)} className=' flex-col-reverse h-[26px] p-1'>
                            <FontAwesomeIcon icon={faClose}/>
                        </button>}
                        <div className='w-[120px] h-[120px] mx-4'>
                                <img className='w-full h-full object-cover' src={product.image} alt=""/>
                        </div>
                        
                    
                            <div className="grid">
                            <h3 className="text-[18px] pt-2">{product.name}</h3>
                            
                            <p className="text-[18px]">{product.size}MM</p>
                            <div className="flex items-center ">  
                              {
                                isDisplayFixCart &&
                                  <button onClick={()=> increace(product)}>
                                  <FontAwesomeIcon className='' icon={faPlus}/>
                              </button >
                              }
                                <p className="mx-3 text-[18px] ">Qty: {product.quantity}</p>

                              
                              {
                                isDisplayFixCart &&
                                <button onClick={()=> decrease(product)} >
                                    <FontAwesomeIcon className='' icon={faMinus}/>
                                </button>}
                                </div>
                            </div>
                            {/* <p className="ml-auto block text-[18px] font-semibold my-auto">{product.price} đ</p> */}
            </div>
   </div>
    );
}
const mapStateToProps = (state) => ({
    isDisplayFixCart : state.isDisplayFixCart
})
const mapDispatchToProps = {deleteItems ,fixToCart, increace ,decrease};

export default connect(mapStateToProps , mapDispatchToProps) (Order);
