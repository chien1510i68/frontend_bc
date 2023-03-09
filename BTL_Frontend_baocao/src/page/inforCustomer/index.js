import { connect } from "react-redux";
import Order from "./order";
import {fixToCart} from '../../ReduxMoudules'

function InforCustomer(props) {
    let {cart ,isDisplayFixCart , fixToCart} = props;
    let totalPrice = cart.reduce((total,item)=> total+ item.price * item.quantity,0);

    return (  
        <>
            <div className="row px-[50px] mt-12">
                <div className="col-md-6 col-sm-12">
                    <img className="mx-auto  w-[130px]"  src="https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png" alt="" />
                    <h1 className="text-center font-semibold my-[20px] text-[24px]">THÔNG TIN KHÁCH HÀNG </h1>
                    <div className="w-full">
                        <form action="">
                            <input className="pl-2 rounded-[5px] py-[10px] outline-none border-[1px] border-solid w-full my-[20px]" type="text" placeholder="Email"/>
                            <div className="flex justify-between">
                                <input className="w-[50%] pl-2 rounded-[5px] py-[10px] outline-none border-[1px] border-solid w-full my-[20px]" type="text" placeholder="Họ tên" />
                                <input className="w-[48%] pl-2 rounded-[5px] py-[10px] outline-none border-[1px] border-solid w-full my-[20px]" type="text" placeholder="Số điện thoại " />
                            </div>
                            <input className="pl-2 rounded-[5px] py-[10px] outline-none border-[1px] border-solid w-full my-[20px]" type="text" placeholder="Địa chỉ nhận hàng " />
                            <div className="flex  justify-between mb-5">
                                <select className="pl-2 rounded-[5px] py-[10px] outline-none border-[1px] border-solid w-[50%] my-[20px]" name="city" >
                                    <option value="HN">Hà Nội</option>
                                    <option value="hP">Hải Phòng</option>
                                    <option value="HCM">Tp Hồ Chí Minh </option>
                                </select>
                                <select className="pl-2 rounded-[5px] py-[10px] outline-none border-[1px] border-solid w-[48%] my-[20px]" name="district" >
                                   <option value="Gl">Gia Lâm</option>
                                   <option value="">Hoàng Mai </option>
                                </select>
                            </div>
                            <textarea className="form-control resize-none outline-none p-2"  rows="7" id="comment" placeholder="Nhập ghi chú nếu cần "></textarea>                  
                              </form>

                            <button className="w-[60%] rounded-[7px] mx-auto my-5 py-3 bg-[#53c66e] block font-bold text-[#f8f7f4] text-[18px]" type="submit">TIẾP TỤC </button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 px-2">
                    <div className="flex justify-between ">
                        <h1 className="text-center font-semibold my-[20px] text-[24px]"> ĐƠN HÀNG  </h1>
                        {
                            !isDisplayFixCart &&
                            <button onClick={() => fixToCart(true)}>Sửa</button>
                        }
                        {
                            isDisplayFixCart &&
                            <button onClick={() => fixToCart()}>Hủy</button>

                        }
                    </div>
                    <div className="miniCart-body overflow-y-scroll">
                    {
                        cart.map(prod => <Order quantity={prod.quantity} product = {prod} />)
                    }
                  </div>
                        <div className="flex justify-between px-5 border-t-[1px] mt-5 pt-3 border-gray-300 border-solid">
                            <span className="text-[20px] font-semibold">Tổng: <br /><i className="text-[12px]">Đã bao gồm thuế VAT</i></span>
                            <span className="text-[20px] font-bold ">{totalPrice} ₫</span>
                        </div>
                    


                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    cart : state.cart,
    isDisplayFixCart : state.isDisplayFix
})
const mapDispatchToProps = {fixToCart}

export default connect(mapStateToProps , mapDispatchToProps) (InforCustomer);