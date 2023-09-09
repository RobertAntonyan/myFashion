import './Brends.css'
import hm from '../../Images/brands/HM.png'
import obey from '../../Images/brands/Obey.png'
import shopify from '../../Images/brands/Shopify.png'
import lacoste from '../../Images/brands/Lacoste.png'
import levis from '../../Images/brands/Levis.png'
import amazon from '../../Images/brands/Amazon.png'

const Brends = () => {
    return (  
         <section className='brands'>
            <div className='container'>
                <ul className='brands_list'>
                    <li><a href='#!'>
                        <img src={hm} alt=''/>
                        </a>
                    </li>
                    <li><a href='#!'>
                        <img src={obey} alt=''/>
                        </a>
                    </li>
                    <li><a href='#!'>
                        <img src={shopify} alt=''/>
                        </a>
                    </li>
                    <li><a href='#!'>
                        <img src={lacoste} alt=''/>
                        </a>
                    </li>
                    <li><a href='#!'>
                        <img  src={levis} alt=''/>
                        </a>
                    </li>
                    <li><a href='#!'>
                        <img src={amazon} alt=''/>
                        </a>
                    </li>
                </ul>

            </div>
         </section>
    );
}
 
export default Brends;
 