// components/Home/index.js
// import { Carousel } from 'flowbite';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Guidelines from '../Guidelines/Guidelines';
import Service from '../Service/Service';
import Carousel from '../carousell/Carousel'
//import NewBanner from '../newbanner/NewBanner'
const Home = () => (
  <> 
  {/* <NewBanner/> */}
    <Banner />
    <Features />
    <Guidelines />
    <Service />
    <Carousel/>
  </>
);

export default Home;

