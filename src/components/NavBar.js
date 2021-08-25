import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className='header'>
        <div className="namebackground">
            <h1 className="name">Daniel Mosso</h1>
        </div>
        <nav className="navigation">
            <ul className="ul">
                <li><a className="text_underline" href="#about-me"> About Me</a></li>
                <li><a className="text_underline" href="#Work"> Work</a></li>
                <li><a className="text_underline" href="#contact-me"> Contact Me</a></li>
                {/* <li><a class="text_underline" href="./assets/Resume Daniel Mosso Ver2.pdf" download> Resume</a></li> */}
            </ul>
        </nav>
    </div>
     );
}
 
export default NavBar;
