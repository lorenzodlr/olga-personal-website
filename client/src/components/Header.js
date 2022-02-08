import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h3>[logo/name]</h3>
            <div className='navigation'>
                <a href='/portfolio'>portfolio</a>
                <a href='/about'>about me</a>
                <a href='/inquiry'>request to book</a>
            </div>
        </div>
    )
}

export default Header