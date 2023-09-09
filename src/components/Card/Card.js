import  './Card.css'
import arrowimg from '../../Images/icons/arrow.svg'

const Card = ({tittle, img}) => {
     return (
        <div className='card'>
            <a href='#!' className='card__link'>

            </a>
            <img className='card__img' src={img}
                alt='category' />
            <div className='card_body'>
                <div className='card_text'>
                    <div className='card_title'>{tittle}</div>
                        <div className='card_muted'>Explore Now!</div>
                   
                </div>
                <div className='card_icon'>
                    <img src={arrowimg}  alt='icon'/>
                </div>
            </div>
        </div>
    );
}

export default Card;