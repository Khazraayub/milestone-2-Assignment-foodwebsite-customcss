import React from 'react'
import Image from 'next/image'
import "../css-files/hero.css"

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-image'>
                <Image src="/images/pizza-bg.jpg" alt="bg" layout="fill" objectFit='cover' />
            </div>
            <div className='hero-content'>
                <h2>Welcom To Pizza House</h2>
                <p>At Pizza House,  we believe that great pizza brings <br/>people together
                Since our doors first opened, <br/>we’ve been dedicated to crafting the perfect pizza — <br/>
                from our hand-stretched dough to<br/> our fresh, high-quality ingredients.<br/>
                 </p>
                
            </div>
        </section>
    )
}

export default Hero