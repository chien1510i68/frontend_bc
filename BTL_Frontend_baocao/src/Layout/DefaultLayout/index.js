import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="row">
                <div className=" mt-[110px]">
                    {children}
                </div>
            </div>
                <Footer/>
            </div>
     );
}

export default DefaultLayout;