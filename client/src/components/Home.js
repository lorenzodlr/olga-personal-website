import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='landing-page-bg' />
            <div className='landing-page'>
                <h1>[logo or name here]</h1>
                <h3>Sub-title</h3>
                <div className='navigation'>
                    <a href='/portfolio'>Portfolio [arrow right icon]</a>
                    <a href='/about'>About Me</a>
                    <a href='/inquiry'>Request to Book</a>
                </div>
                <div className='social-media'>
                    <a className='social-media-btn btn'>
                        <h6>[icon]</h6>
                        <h6>instagram</h6>
                    </a>
                    <a className='social-media-btn btn'>
                        <h6>[icon]</h6>
                        <h6>twitter</h6>
                    </a>
                    <a className='social-media-btn btn'>
                        <h6>[icon]</h6>
                        <h6>some other social</h6>
                    </a>
                </div>
            </div>
            <div className='img-slideshow'>
                <h1>[image slideshow here]</h1>
            </div>
        </div>
    )
}

export default Home