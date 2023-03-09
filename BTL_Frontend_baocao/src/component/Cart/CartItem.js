
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClose, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import {deleteItems , increace ,decrease} from "../../ReduxMoudules"
import { connect } from 'react-redux';
// import { deleteItem , upNumber , downNumber} from '../.';
function CartItem(props) {
    let { increace, deleteItems , decrease} = props;
    let product ={...props.product};
    return (
        <div>
             <div className="miniCart-item">
                            <button onClick={()=> deleteItems(product.id)} className=' flex-col-reverse h-[26px] p-1'>
                               <FontAwesomeIcon icon={faClose}/>
                            </button>
                        <div className="cartItem-img">
                            <div className='w-[90px] h-[90px]'>
                                 <img className='w-full h-full object-cover' src={product.image} alt=""/>
                            </div>
                          
                        </div>
                        
                        <div className="cartItem-box">
                            <div className="cartItem-boxInfo pt-2">
                                <h3 className="cartItem-infoName">{product.name}</h3>
                                <div className="cartItem-infoPrice">
                                    <p className="cartItem-newPrice">{product.price} đ</p>
                                    <p className="cartItem-oldPrice">{product.oldPrice} ₫</p>
                                </div>
                            </div>
                            <div className="cartItem-itemOption">
                                <p className="cartItem-option">{product.size}MM</p>
                                <div className="cartItem-btnQuantity">  
                                    <button onClick={()=> increace(product)}>
                                        <FontAwesomeIcon className='' icon={faPlus}/>
                                    </button >
                                    <p className="mx-2 ">Qty: {product.quantity}</p>
                                    <button onClick={()=> decrease(product)} >
                                        <FontAwesomeIcon className='' icon={faMinus}/>
                                    </button>
                                </div>
                            </div>
                        </div>
             </div>
        </div>
    );
};
const mapDispatchToProps = {deleteItems , increace ,decrease};

export default connect(null , mapDispatchToProps) (CartItem);