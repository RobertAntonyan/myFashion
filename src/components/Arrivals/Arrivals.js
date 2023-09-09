import Card from '../Card/Card';
import cat01img from '../../Images/categories/cat-01.jpg'
import cat02img from '../../Images/categories/cat-02.jpg'
import cat03img from '../../Images/categories/cat-03.jpg'

import './Arrivals.css'

const Arrivals = () => {
    return ( 
        <section className='arrivals'>
                <div className='container'>
                    <div className='arrivals_header'>
                       <h2 className='title-2'>
                        NEW ARRIVALS
                       </h2>
                    </div>
                    <div className='arrivals_cards'>
                            <Card tittle='Hoodies & Sweetshirt' img={cat01img}/>
                            <Card tittle='Coats & Parkas' img={cat02img}/>
                            <Card  tittle='Tees & T-Shirt' img={cat03img}/>                    
                    </div>

                </div>
        </section>
     );
}
 
export default Arrivals;
