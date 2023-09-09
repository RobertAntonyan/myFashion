import './Vauchers.css'
import appstore from '../../Images/icons/app-store.png'
import googleplay from '../../Images/icons/google-play.png'
import vaucher from '../../Images/images/vouchers-img.png'
const Vauchers = () => {
    return ( 
        <div className='vauchers'>
                <div className='container'>
                    <div className='vaucher_content'>
                        <div className='vaucher_text'>
                        <h2>DOWNLOAD APP & GET THE VOUCHER!</h2>
                        <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                        </div>
                        <div className='vaucher_icon'>
                                <img className='icon' src={appstore} alt='appstore' />
                                <img className='icon' src={googleplay} alt='googleplay' />
                        </div>
                    </div>

                </div>
                <div className='vaucher_img'>
                    <img  className='vaucher_mobile' src={vaucher} alt='vaucher'/>
                </div>
        </div>
     );
}
 
export default Vauchers;