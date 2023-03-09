function Footer() {
    return (  
        <>
            <div className="row px-12">
                <div className="col-md-4 col-sm-6 col-xs-12">
                        <h3 className="mb-[30px] text-[20px] font-medium  text-left">NHẬN THÔNG TIN MỚI NHẤT TỪ ROUNTINE</h3>
                        <div className="">
                            <div>
                                <div className="flex w-[100%]">
                                    <select name="gender" id="" className="outline-none  p-[10px] border-solid border-[#d6d6d4] border-[1px] box-border w-[30%] mr-[10px]">
                                        <option value="nam">Nam</option>
                                        <option value="nữ">Nữ</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <input type="text" className="outline-none  p-[10px] border-solid border-[#d6d6d4] border-[1px] box-border flex-1"/>
                                </div>
                                <input type="text" className=" outline-none p-[10px] border-solid border-[#d6d6d4] border-[1px] my-[16px] box-border w-full" />
                                <button type="submit" className="outline-none block w-full bg-[#87898b] font-bold text-[#f8f7f4] p-[15px]">ĐĂNG KÍ NGAY</button>
                            </div>
                        </div>            
                </div>
                <div  className="col-md-4 md:pl-14 xs:pl-0 col-sm-6 col-xs-6">
                    <h3 className="mb-[20px] text-[20px] font-medium  text-left">LIÊN LẠC</h3>

                    <li className="list-none text-left my-[10px] text-[18px]">cskh@curnonwatch.com</li>
                    <li className="list-none text-left my-[10px] text-[18px]">0868889103</li>
                      <div className="flex w-full justify-left mt-[50px]">
                       <img className=" w-[12%] mr-[10px]" src="https://curnonwatch.com/_next/static/media/cod.10bcbd91.png" alt="" />
                       <img className=" w-[12%] mx-[10px]" src="https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png" alt="" />
                       <img className=" w-[12%] mx-[10px]" src="https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png" alt="" />
                       <img className=" w-[12%] mx-[10px]" src="https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png" alt="" />
                      </div>
                   <div>

                   </div>
                </div>
                <div className="col-md-4 col-sm-6 sm:mt-[30px] col-xs-6">
                <h3 className="mb-[20px] text-[20px] font-medium  text-left">HANOI STORES</h3>
                    <li className="list-none text-left my-[10px] text-[18px]">33 Hàm Long, Hoàn Kiếm.</li>
                    <li className="list-none text-left my-[10px] text-[18px]">9 B7 Phạm Ngọc Thạch, Đống Đa.</li>
                    <li className="list-none text-left my-[10px] text-[18px]">173C Kim Mã, Ba Đình</li>
                <h3 className="mb-[20px] text-[20px] font-medium  text-left">TP.HCM STORES</h3>
                    <li className="list-none text-left my-[10px] text-[18px]">25 Nguyễn Trãi, P.Bến Thành, Quận 1.</li>
                    <li className="list-none text-left my-[10px] text-[18px]">348 Lê Văn Sỹ, Phường 14, Quận 3.</li>

                
                
                </div>
                
            </div>
        </>

    );
}

export default Footer
    
;