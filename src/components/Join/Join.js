import './Join.css'
const Join = () => {
    return ( 
        <div className="join">
            <div className='join_content'>
                <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
            </div>
            <div className='join_shop'>
                <p>Type your email down below and be young wild generation</p>
            </div>
            <div className='join_form'>
                <input type='search' placeholder='Add your email here'/>
                {/* <input className='button' placeholder='SEND'/> */}
                <button>SEND</button>
            </div>
            <div></div>
        </div>
     );
}
 
export default Join;