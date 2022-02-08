import './About.css'
import sampleImage from './unnamed.jpeg'

import Header from './Header'
import Footer from './Footer'

const About = () => {
    return (
        <div className='main-container'>
            <div className='about'>
                <Header />
                <div className='about-container'>
                    <h3>Let me introduce myself</h3>
                    <p>
                        <img src={sampleImage} className='main-img' />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Vel eros donec ac odio tempor orci dapibus ultrices. Pellentesque id nibh tortor id aliquet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Vitae sapien pellentesque habitant morbi. Dignissim suspendisse in est ante in nibh. Venenatis a condimentum vitae sapien pellentesque habitant. Sed vulputate odio ut enim blandit volutpat. Eget lorem dolor sed viverra ipsum nunc aliquet. Ut morbi tincidunt augue interdum velit. Sed nisi lacus sed viverra tellus in. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Vestibulum sed arcu non odio euismod lacinia at quis. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Et netus et malesuada fames ac turpis egestas. <br /><br />

                        Eleifend quam adipiscing vitae proin sagittis nisl. Aliquam malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea. Molestie nunc non blandit massa enim nec dui. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tristique nulla aliquet enim tortor at auctor. Tempor orci eu lobortis elementum nibh. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dui ut ornare lectus sit amet.
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default About