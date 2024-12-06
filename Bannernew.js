import Card from './card.js';
import {card_content} from './Banner_data.js';

export default function Banner(){
    return(
      <div className='container'>
        {card_content.map((bannerdata) => <Card {...bannerdata}/>)}
        {/* <Card {...card_content[0]}/>
        <Card {...card_content[1]}/>
        <Card {...card_content[2]}/> */}
      </div>
    );
  }
  