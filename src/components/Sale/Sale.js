import './Sale.css'
import saleImg from '../../Images/images/promo-img.jpg'
const Sale = () => {
    return (
        <div className='sale'>
            <div className='saleimg'>
                <img className='img' src={saleImg} alt='sale' />
            </div>
            <div className='salecontent'>
                <div className='payday'>
                    <h2>
                        <span className='pay_day'>
                            PAYDAY
                            </span>
                        <span className='span_text'>SALE NOW</span>

                    </h2>
                <div className='salehighlight'></div>
                </div>
               

                <div className='sale_p'>
                    <p>Spend minimal $100 get 30% off
                        voucher code for your next purchase</p>
                </div>

                <div className='sale_date'>
                    <p className='date'>1 June - 10 June 2021</p>
                    <p className='terms'>*Terms & Conditions apply</p>
                </div>
                <div className='button'>
                    <a className='shop' href='#!'>SHOP NOW</a>
                </div>
            </div>
        </div>
    );
}

export default Sale;