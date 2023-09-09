import Card from '../Card/Card';
import './Favorite.css'
import favimg_01 from '../../Images/images/promo-01.jpg'
import favimg_02 from '../../Images/images/promo-02.jpg'
const Favorite = () => {
    return ( 
        <div className='favorite'>
                <div className='container'>
                    <div className='favorite_header'>
                       <h2 className='title-2'>
                       Young’s Favourite
                       </h2>
                    </div>
                    <div className='favorite_cards'>
                            <Card tittle='Trending on instagram' img={favimg_01} />
                            <Card tittle='All Under $40' img={favimg_02}/>                            
                    </div>

                </div>
        </div>
     );
}
 
export default Favorite;