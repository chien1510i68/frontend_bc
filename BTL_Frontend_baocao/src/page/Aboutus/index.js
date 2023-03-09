import React from 'react';

function AboutUs(props) {
    return (
       <>
         <div className='bg-[#f8f7f4]'>
          <div className='relative '>
              <div className=''>
                    <img src="https://routine.vn/media/wysiwyg/banner_after_video_desktop.png" alt="" />
                </div>
                <div className='bg-[#f8f7f4] w-[70%] z-20 absolute translate-x-[-50%] top-[80%] left-[50%] right-[50%]'>
                    <h1 className='text-center font-[700] my-[20px] text-[32px] text-[#444246]'>Chào bạn ! chúng tôi là Rountine</h1>
                    <p className='text-center font-[400] my-[20px] text-[18px] w-[50%] mx-auto'>
                        Chúng tôi biến sản phẩm phụ kiện không thể thiếu trở thành những
                        biểu tượng tinh thần đầy cảm hứng, để thúc đẩy thế hệ trẻ Việt Nam không ngừng tiến lên phía trước.
                    </p>
                </div>
          </div>
          <div className='mt-[200px] px-[50px] row items-center'>
                <div className='col-md-5 col-sm-4'>
                    <img className='h-[90vh] w-[100%] object-cover object-top' src="https://routine.vn/pub/media/wysiwyg/B.F_2022_-_infinity_-_5_-_600_x_950-01_1.png" alt="" />
                </div>
                <div className='px-[100px] col-sm-8 col-md-7' >
                    <h4 className='tracking-[10px] uppercase text-[28px] text-left text-[#889595]'>Tại sao không </h4>
                    <i className='text-[16px] text-left tracking-[2px] py-3 block text-[#889595] '>Đó là câu hỏi của chúng tôi khi bắt đầu.</i>
                    <h2 className='tracking-[1px]  text-[36px] pr-5 py-5 text-left text-[#0f1010]'>Và cũng là tinh thần "Why not" chúng tôi khát khao truyền tải</h2>
                    <p className='text-[16px] text-left tracking-[1px] py-2 block text-[#889595]'>
                        Với những sản phẩm được thiết kế bằng nhiệt huyết, khát khao và khối óc đầy sáng tạo của đội ngũ chính những người trẻ Việt Nam, 
                        chúng tôi tin rằng tinh thần "Why not" ấy sẽ luôn đồng hành và truyền cảm hứng cho bạn mỗi ngày.
                    </p>

                </div>
          </div>

          <div className='mt-[200px] px-[50px] row items-center'>
             
                <div className='px-[100px] col-sm-8 col-md-7' >
                    <h4 className='  tracking-[1px]  text-[36px] pr-5 py-5 text-left text-[#0f1010]'>GIÁ TRỊ CỐT LÕI </h4>
                    <i className='text-[16px] text-left tracking-[2px] py-3 block text-[#889595] '>
                    "Chúng tôi tin rằng cách tốt nhất để truyền tải được thông điệp “Tại sao không?” trước hết phải 
                    bắt đầu từ chính tập thể của Curnon.”
                    </i>
                   

                </div>
                <div className='col-md-5 col-sm-4'>
                    <img className='h-[90vh] w-[100%] object-cover object-top' src="https://routine.vn/pub/media/wysiwyg/B.F_2022_-_infinity_-_5_-_600_x_950-02_1.png" alt="" />
                </div>
          </div>

        <div className='row mt-[100px] px-[50px] pb-[100px]'>
            <div className='col-md-4 com-sm-6 '>
                <img className='mx-auto' src="https://curnonwatch.com/_next/static/media/Illus-01.2bc704d7.png" alt="" />
                <h5 className='font-[700] text-[16px] text-center block text-[#000] my-3'>Dám nghĩ, dám làm</h5>
                <p className='block w-full px-2 text-center'>Với khát khao trở thành người đồng hành của các bạn, chúng tôi tin rằng chính mình phải có 
                    đủ can đảm để vượt qua thách thức, dám nghĩ, dám dẫn đầu và khác biệt.</p>
            </div>
            <div className='col-md-4 com-sm-6 '>
                <img className='mx-auto' src="	https://curnonwatch.com/_next/static/media/Illus-02.f271c5c6.png" alt="" />
                <h5 className='font-[700] text-[16px] text-center block text-[#000] my-3'>Bắt đầu và kết thúc bằng khách hàng</h5>
                <p className='block w-full px-2 text-center'>
                    Với tinh thần của những chiến binh, chúng tôi luôn chiến đấu với chính bản thân mình mỗi ngày để đem lại những trải 
                    nghiệm “WOW” nhất cho người trẻ Việt Nam
                
                </p>
            </div>
            <div className='col-md-4 com-sm-6 '>
                <img className='mx-auto' src="	https://curnonwatch.com/_next/static/media/Illus-03.53789ba0.png" alt="" />
                <h5 className='font-[700] text-[16px] text-center block text-[#000] my-3'>Truyền cảm hứng</h5>
                <p className='block w-full px-2 text-center'>
                Tương lai với chúng tôi là những sản phẩm vươn tầm thế giới, là thế hệ trẻ Việt Nam đầy tự tin để theo đuổi đam mê của mình, 
                là "Why not?" trở thành triết lí của tất cả mọi người
                </p>
            </div>
        </div>

        </div>
       </>
    );
}

export default AboutUs;