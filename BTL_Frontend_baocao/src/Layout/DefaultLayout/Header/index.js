// import {FaTimes} from 'react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCartPlus, faCoffee, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import Cart from '../../../component/Cart/Cart';
import {toggleCart , toggleSearch} from '../../../ReduxMoudules'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchUI from '../../../component/Search/Search';
function Header(props) {
  let {toggleCart , toggleSearch} = props
    return (
      <>
        <div className='row bg-[#f8f7f4] h-[106px] py-[30px] shadow-md px-[50px] fixed z-30 top-0 left-0 right-0 bottom-0'>
            <div className='col-lg-4 col-md-4 p-0 md:relative sm:absolute sm:bottom-0 sm:mb-[10px]'>
                <Link to="/">
                    <img className='w-[130px]' src="https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png" alt="" />
                </Link>
            </div>
            <div>
                  <ul className="text-left  ml-[20px] flex">
                       <li className='mx-[10px]'><Link className='py-[15px]  font-semibold'  to="/"   >
                          TRANG CHỦ     
                          </Link>
                       </li>
                      
                       <li className='mx-[10px]'><Link className='py-[15px] cursor-pointer  font-semibold'  to="/male"   >
                          VỀ NAM GIỚI  
                          </Link>
                          
                       </li>
                       <li className='mx-[10px]'><Link className='py-[15px]  font-semibold'  to="/female"   >
                          VỀ NỮ GIỚI 
                          </Link>
                       </li>
                       <li className='mx-[10px]'><Link className='py-[15px]  font-semibold'  to="/us"   >
                          VỀ CHÚNG TÔI 
                          </Link>
                       </li>
                  </ul>
            </div>
        
              <div className=' flex-1  text-right md:relative sm:absolute sm:bottom-0 sm:right-0 md:mt-0 sm:mb-[10px] sm:mt-4 '>
                <FontAwesomeIcon icon={faSearch} className="cursor-pointer  text-[22px] "   onClick={() => {toggleSearch(true)}}/> 
                 {/* <FontAwesomeIcon className= '  text-[24px] text-[#382e2e] border-none cursor-pointer mx-[50px]' icon={faUser} /> */}
                <FontAwesomeIcon icon={faCartArrowDown} onClick={() => {toggleCart(true)}} className=" sm:mr-[50px] sm:ml-[20px] text-[#eb8282] text-[24px]  cursor-pointer"/>
                <Cart/>
                <SearchUI/>
              </div>
        </div>
      
      </>
      );
}
const mapDispatchToProps ={toggleCart, toggleSearch }
export default connect(null, mapDispatchToProps) (Header);