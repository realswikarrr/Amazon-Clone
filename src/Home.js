import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
        {/* Product id, title, price, rating, image */}
        <div className="home__row">
            <Product id={"12321321"} 
            title="The Lean Startup: How Constant Innvoation Creates Radically Sucessful Business Paperback" 
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product id={"12321344"} 
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black" 
            price={280}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
        />
        </div>
        
        <div className="home__row">
            <Product id={"12321322"} 
            title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play" 
            price={15}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71zEiQWAUoL._AC_SL1500_.jpg"
        />
        <Product id={"12321377"} 
            title="AmazonBasics Controller Charging Station for PlayStation 4 DualShock 4 Controllers - 4 Foot Cable, Black" 
            price={30}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81dS49Qdn8L._SL1500_.jpg"
        />

        <Product id={"1232138788"} 
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler" 
            price={200}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
        />
        </div>

        <div className="home__row">
            <Product id={"1232777"} 
            title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)" 
            price={124}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/914QsvAhu8L._AC_SL1500_.jpg"
        />
        </div>

        {/* Product */}
        </div>
    )
}

export default Home
