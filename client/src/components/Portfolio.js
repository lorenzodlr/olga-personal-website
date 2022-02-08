import './Portfolio.css'
import sampleImage from './unnamed.jpeg'
import { useEffect, useState } from 'react'

import Header from './Header'
import Footer from './Footer'

const Portfolio = () => {

    const [images, setImage] = useState()

    useEffect(() => {}, [])

    return (
        <div className='main-container'>
            <div className='portfolio'>
                <Header />
                <div className='portfolio-container'>
                    <h3>Just a few of my work</h3>
                    <button>[category buttons]</button>
                    <div className='img-container'>
                        <div className='grid'>
                            <img src={sampleImage} className='large' />
                        </div>
                        <div className='grid'>
                            <img src={sampleImage} className='medium' />
                            <img src={sampleImage} className='medium' />
                        </div>
                        <div className='grid'>
                            <img src={sampleImage} className='small' />
                            <img src={sampleImage} className='small' />
                            <img src={sampleImage} className='small' />
                            <img src={sampleImage} className='small' />
                        </div>
                        <div className='grid'>
                            <img src={sampleImage} className='large' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio