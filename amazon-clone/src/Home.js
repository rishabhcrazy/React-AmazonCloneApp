import React from 'react';
import './Home.css';
import Product from './Product.js'
function Home() {
    return (
        <div className = 'home'>

            <div className = 'home_container'>
                <img className = 'home_image'
                alt=" Alexa Smart home" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroMarch21/Cutter_Brownie_Desktop_1x._CB658842439_.jpg" 
                />               
            </div>

            <div className = 'home_row'>
                <Product
                    id = '100000'
                    title='The Lean startup'
                    price = {299}
                    image = 'https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg'
                    rating = {5}
                 />
                <Product
                    id = '100001'
                    title='All-new Echo Dot (4th Gen)'
                    price = {3999}
                    image = 'https://m.media-amazon.com/images/I/41dayzt6quL._AC_UY218_.jpg'
                    rating = {5}
                />
            </div>

            <div className = 'home_row'>
                <Product
                        id = '100011'
                        title='All-new Echo Dot (4th Gen) with clock'
                        price = {4999}
                        image = 'https://m.media-amazon.com/images/I/41wssh5xNIL._AC_UY218_.jpg'
                        rating = {5}
                    />
                <Product
                    id = '100012'
                    title='Echo Dot (3rd Gen) – Smart speaker with Alexa (Purple)'
                    price = {3499}
                    image = 'https://m.media-amazon.com/images/I/61V25P7mlyL._AC_UY218_.jpg'
                    rating = {5}
                />
                <Product
                    id = '100013'
                    title='Echo Dot (3rd Gen, Grey) Combo with Wipro 9W LED Smart Color Bulb'
                    price = {3599}
                    image = 'https://m.media-amazon.com/images/I/61mmpVq+D4L._AC_UY218_.jpg'
                    rating = {5}
                />
                
            </div>

            <div className = 'home_row'>
                 <Product
                    id = '100020'
                    title='ntroducing Echo Show 8 – Smart display with Alexa'
                    price = {8999}
                    image = 'https://m.media-amazon.com/images/I/51UZ17lvVFL._AC_UY218_.jpg'
                    rating = {5}
                />
            </div>

        </div>
    )
}

export default Home
