import './card.css';
import Image1 from './Images/cusine.jpg';
import Image2 from './Images/pricing.png';

export default function Card(prop){
  
    return(
      <div className='card'>        
        <div className='card-header'>{prop.title}
        <img src = {Image1} alt='picture' height='50' width='100'/></div>   
        {/* <div><img src = {Image1} alt='picture' height='50' width='100'/></div>        */}
        <div className='card-body'>{prop.description}</div>
      
      </div>
    );
  }