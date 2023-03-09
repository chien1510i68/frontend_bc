import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './page/Home';
import './App.css';
// import publicRouter from './routes/index';
import DefaultLayout from './Layout/DefaultLayout';
import Male from './page/Male';
import Female from './page/Female';
import InforCustomer from './page/inforCustomer';
import AboutUs from './page/Aboutus';
function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
              <Route path="/" element=
              {
              <DefaultLayout>
                <Home/>
              </DefaultLayout>
              
              }/>
              {/* <Route path="/ao" element={<Ao/>}/> */}
              <Route path="/male" element=
              {
              <DefaultLayout>
                <Male/>
              </DefaultLayout>
              
              }/>
              <Route path="/female" element=
              {
              <DefaultLayout>
                <Female/>
              </DefaultLayout>
              
              }/>
                 <Route path="/us" element=
              {
              <DefaultLayout>
                <AboutUs/>
              </DefaultLayout>
              
              }/>
            <Route path="/infor_customer" element={ <InforCustomer/>}/>
          </Routes>
         

        </div>

    </Router>
  );
}

export default App;
