import './Footer.css'
import facebook from '../../Images/socials/fb.svg'
import instagram from '../../Images/socials/inst.svg'
import twiter from '../../Images/socials/tw.svg'
import linkedin from '../../Images/socials/in.svg'
const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='footer_icons'>
                <div className='footer_title'>
                    <h2>FASHION</h2>
                </div>
                <div className='footer_desc'>
                    <p>Complete your style with awesome clothes from us.</p>
                </div>
                <div className='footer_icon'>
                    <img className='Icon' src={facebook}  alt='facebook'/>
                    <img className='Icon' src={instagram}  alt='insta'/>
                    <img className='Icon' src={twiter}  alt='twiter'/>
                    <img className='Icon' src={linkedin}  alt='link'/>
                </div>
            </div>
            <div className='footer_content'>
                <div className='footer_company'>
                        <p>Company</p>
                        <ul>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>
                </div>
                <div className='footer_quick'>
                <p>Quick Link</p>
                        <ul>
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>
                </div>
                <div className='footer_legal'>
                <p>Legal</p>
                        <ul>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;