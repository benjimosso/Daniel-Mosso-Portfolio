import './footer.css'
import  twitter  from "./images/transparent-png-twitter-logo-black-etm-554475.png";
import github from './images/pngwing.com.png'
import emailLogo from './images/email-logo-png-1125.png'

const Footer = () => {
    return ( 
    <footer>
    <section className="contact-me" id="contact-me">
            <ul className="ul2">
                <li>(805) 637-5758</li>
                <li>
                    <a href="mailto:benjimosso@gmail.com"><img src={emailLogo} alt=""/></a>
                </li>
                <li>
                    <a href="https://github.com/benjimosso/" target="_blank"><img src={github} alt=""/></a>
                </li>
                <li>
                    <a href="https://twitter.com/benjimosso" target="_blank"><img src={twitter} alt=""/></a>
                </li>
            </ul>
    </section>
</footer>
     );
}
 
export default Footer;