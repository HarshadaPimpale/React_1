import Card from './card.js';
import data from './Banner_data.js';

export default function Banner(){
    return(
      <div className='container'>
        <Card title={data.card_content[0].title} description={data.card_content[0].description}/>
        <Card title={data.card_content[1].title} description={data.card_content[1].description}/>
        <Card title={data.card_content[2].title} description={data.card_content[2].description}/>
      </div>
    );
  }
  