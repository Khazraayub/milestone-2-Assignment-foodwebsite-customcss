import React from 'react'
import Image from 'next/image'
import "../css-files/about.css"

const About = () => {
  return (
    <section className='about'>
      <h2>
        <span className='first-word'>ABOUT US</span>
        
      </h2>

      <div className='about-content'>
        <Image src="/images/pizza1.jpg" alt="pizza" width={500} height={500} />

        <div className='about-text'>
          <p>At Pizza House, pizza is more than just food – it’s an experience crafted with love and attention to every detail. Our pizzas start with freshly prepared dough, hand-stretched to create the perfect balance of crispy and chewy crust. We top each pizza with our signature tomato sauce, made from vine-ripened tomatoes and a blend of herbs and spices for a rich, flavorful base.
              We believe in using only the finest, freshest ingredients. From creamy mozzarella cheese that melts to perfection to a variety of high-quality toppings – including hand-cut vegetables, premium meats, and unique flavors – every pizza is made to order and cooked to golden-brown perfection in our ovens.
               Whether you’re craving a classic Margherita, a spicy Pepperoni, or an inventive custom creation, our menu offers a wide variety of options to satisfy every pizza lover’s taste. At Pizza House, we take pride in making every slice memorable. Dig into a slice of passion, quality, and flavor with us!.</p>
          
        </div>
      </div>
    </section>
  )
}

export default About
