import './Booking.css'

import Header from './Header'
import Footer from './Footer'

const Booking = () => {
    return (
        <div className='main-container'>
            <div className='booking'>
                <Header />
                <div className='booking-container'>
                    <h1>Tell me about your tattoo!</h1>
                    <h3>I can 100% do it.</h3>
                    <form onSubmit={e => e.preventDefault()}>
                        <h6>Name</h6>
                        <input type='text' />
                        <h6>Email</h6>
                        <input type='text' />
                        <h6>Description/Inquiry</h6>
                        <textarea />
                        <button>send</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Booking