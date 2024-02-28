import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [cartData, setCartData] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(result => setCartData(result))
    }, [])

    return (
        <>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahmedabad Open now</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        cartData.map((item, index) => {
                            return (
                                <Card className='mb-4 hove' style={{ width: "22rem", border: 'none' }}>
                                    <Card.Img variant='top' className='cd' src="" />
                                    <div className="card_body">
                                        <div className="upper_data d-flex justify-content-between align-items-center">
                                            <h4 className='mt-2'>jksdjd</h4>
                                            <span> &nbsp;★</span>
                                        </div>
                                        <div className="lower_data d-flex justify-content-between">
                                            <h5>fsfsfa</h5>
                                            <span>400</span>
                                        </div>
                                        <div className="extra"></div>
                                        <div className="last_data d-flex justify-content-between">
                                            <img src="/log192.png" className='limg' alt="" />
                                            <Button variant="outline-light" className='mt-2 mb-2' style={{ width: "150px", background: '#ff3054', border: 'none' }}>Add To Cart</Button>
                                            <img src="/log192.png" className='laimg' alt="" />
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Home