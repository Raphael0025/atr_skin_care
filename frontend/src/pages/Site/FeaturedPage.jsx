import React, { useState } from 'react'
import { GradientHeader, SideBar, ProductShowcase, CardItem } from '../../Components'
import img1 from '../../assets/products/MOISTURING_BAR_SOAP.png'
import img2 from '../../assets/products/WHITENING_BAR_SOAP.png'
import img3 from '../../assets/products/TETRINOIN_0.025_CREAM.png'

const FeaturedPage = () => {
    const [select, setSelected] = useState(true)

    const handleItemClick = () => {
        setSelected(!select)
    }

    const products = [
        {
          id: 1,
          name: 'MOISTURING BAR SOAP',
          image: img1,
          price: 150
        },
        {
          id: 2,
          name: 'WHITENING BAR SOAP',
          image: img2,
          price: 150
        },
        {
          id: 3,
          name: 'TETRINOIN 0.025 CREAM',
          image: img3,
          price: 150
        },
        {
          id: 4,
          name: 'TETRINOIN 0.025 CREAM',
          image: img3,
          price: 150
        }
    ]
    return (
        <main className='container-fluid d-flex pt-2 p-0 m-0 vh-100'>
            <SideBar props={'pt-5 text-dark user-aside h-100'}>
                <ul className='navbar-nav gap-3 pt-5'>
                    <li className={`nav-item p-2 px-4 ${select ? 'active' : ''}`} onClick={handleItemClick}>Best Sellers</li>
                    <li className={`nav-item p-2 px-4 ${!select ? 'active' : ''}`} onClick={handleItemClick}>All Products</li>
                </ul>
            </SideBar>
            {select ? 
                <section className='container-fluid p-3 mt-5 overflow-y-auto' >
                    <GradientHeader title={'Best Sellers'} />
                    <div className='p-3 gap-5 container '>
                        <ProductShowcase productData={products}/>
                    </div>
                </section>
                :
                <section className='container-fluid p-3 mt-5 overflow-y-auto' >
                    <GradientHeader title={'All Products'} />
                    <div className='p-3 gap-3 gr container '>
                        {products.map((product, indx) => (
                            <CardItem key={indx} data={product} />
                        ))}
                    </div>
                </section>
            }
        </main>
    )
}

export default FeaturedPage