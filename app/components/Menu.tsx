import React from 'react'
import Image from "next/image"
import "../css-files/menu.css"

const Menu = () => {
    return (
        <section className='menu'>
            <h2>
                <span className='first-word'>Our Menu</span>
                
            </h2>

            <div className='menu-container'>
                <div className='menu-item'>
                    <Image src="/images/cheese-pizza.jpg" alt="menu1" width={200} height={200} />
                    <p>Cheese Pizza</p>
                    <div className='price-container'>
                        <span className='current-price'>$18.00</span>
                        
                    </div>
                    
                </div>

                <div className='menu-item'>
                    <Image src="/images/Kabab.png" alt="menu2" width={200} height={200} />
                    <p>Kabab Pizza</p>
                    <div className='price-container'>
                        <span className='current-price'>$20.00</span>
                        
                    </div>
                    
                </div>

                <div className='menu-item'>
                    <Image src="/images/Lava-pizza.jpg" alt="menu3" width={200} height={200} />
                    <p>Lava Pizza</p>
                    <div className='price-container'>
                        <span className='current-price'>$22.00</span>
                       
                    </div>
                  
                </div>

                <div className='menu-item'>
                    <Image src="/images/creamy.jpg" alt="menu4" width={200} height={200} />
                    <p>Creamy Pizza</p>
                    <div className='price-container'>
                        <span className='current-price'>$17.00</span>
                        
                    </div>
                    
                </div>

                <div className='menu-item'>
                    <Image src="/images/crown.png" alt="menu5" width={200} height={200} />
                    <p>Crown Pizza</p>
                    <div className='price-container'>
                        <span className='current-price'>$24.00</span>
                        
                    </div>
                    
                </div>

                <div className='menu-item'>
                    <Image src="/images/afghani.png" alt="menu6" width={200} height={200} />
                    <p>Afghani Pizza</p>
                    <div className='price-container'>
                        <span className='current-price'>$16.00</span>
                        
                    </div>
                   
                </div>

            </div>
        </section>
    )
}

export default Menu