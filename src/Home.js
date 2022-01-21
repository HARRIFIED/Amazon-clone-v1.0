import React from 'react';
import './Home.css';
import './Carousel.css';
import Product from './Product';
import ControlledCarousel from './Carousel';
import data from './store/product.json'


const Home = () => {
    return (

        <div className="home">
            <ControlledCarousel className=".carousel_image" />
            <section className="home_section">
              <div className="home-row">
               {
                 data.slice(0,4).map(d => (
                    <Product
                      id = {d.id}
                      title = {d.title}
                      price = {d.price}
                      rating = {d.rating}
                      image = {d.image}

                    />
                 ))
               }
                
              </div> 
              <div className="home-row">
                {
                 data.slice(4, 7).map(d => (
                    <Product
                      id = {d.id}
                      title = {d.title}
                      price = {d.price}
                      rating = {d.rating}
                      image = {d.image}

                    />
                 ))
               }
              </div>
              <div className="home-row">
                  {
                 data.slice(7, 9).map(d => (
                    <Product
                      id = {d.id}
                      title = {d.title}
                      price = {d.price}
                      rating = {d.rating}
                      image = {d.image}
                    />
                 ))
               }
              </div>
              <div className="home-row">
                  {
                 data.slice(9 ).map(d => (
                    <Product
                      id = {d.id}
                      title = {d.title}
                      price = {d.price}
                      rating = {d.rating}
                      image = {d.image}
                    />
                 ))
               }
              </div>
            </section>
        </div>
    )
}

export default Home
 