import { connect } from "react-redux";
import {toggleSearch} from "../../ReduxMoudules"
function SearchUI(props) {
    let {isDisplaySearch , toggleSearch}= props
    return ( 
        <>
          {
            isDisplaySearch &&
          <div className="border-t-[1px] items-start pt-[15vh] border-[#cacbca] flex border-solid h-[60vh] z-20 bg-[#f8f7f4f2] top-[106px] left-0 right-0 bottom-0 fixed">
                <input className=" px-3 mx-[auto] w-[50vw] outline-none border-b-[2px] bg-transparent text-[20px] border-[#333] border-solid" type="text" placeholder="Nhập từ khóa tìm kiếm " />
                <p className="mr-[100px] cursor-pointer p-3 " onClick={() => {toggleSearch(false)}}>Đóng</p>
                {/* <ul className="text-center ">
                    <p className="text-[22px] mt-[20px] text-[#a2a3a4] uppercase">Các từ khóa nổi bật</p>
                    <li className="my-3 ]"><a href="">Kashmir</a></li>
                    <li className="my-3"><a href="">Colosseum</a></li>
                    <li className="my-3"><a href="">Mykonos</a></li>
                </ul> */}
            </div>}
        </>
     );
}
const mapSateToProp = (state) =>(
    {
        isDisplaySearch: state.isDisplaySearch
    }
)
const mapDispatchToProps = {toggleSearch}
export default connect (mapSateToProp , mapDispatchToProps) (SearchUI);