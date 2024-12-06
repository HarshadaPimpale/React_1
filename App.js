import { useState } from 'react';
import './App.css';
import Banner from './Component/Banner.js';
import Tabmenu from './Component/Tabmenu';
import { Services } from './Component/Servicedata.js';
import Foodbutton from './Component/Foodbutton';
import { Foodimages } from './Component/Foodimage.js';

function App() {
  const [ChangedText, setChangedText] = useState(null)
  const [ChangedImage, setChangedImage] = useState('Indian')

  function foodclick(ser) {
    console.log("Printing food image");
    setChangedImage(ser);
  }

  function handleclick(services) {
    console.log(services);
    setChangedText(services);
  }

  return (
    <div>
      <div id='nav'>
        <h1 className='navheader'>FOOD HOUSE</h1>
        <div id='menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </div>
      <Banner />
      <section id='container'>
        <div id='services-tabs'>
          <Tabmenu command={() => handleclick("TakeOut")} isactive={ChangedText === 'TakeOut' ? "activetab":''}>TakeOut</Tabmenu>
          <Tabmenu command={() => handleclick("Delivery")} isactive={ChangedText === 'Delivery' ? "activetab":''}>Delivery</Tabmenu>
          <Tabmenu command={() => handleclick("DineIn")} isactive={ChangedText === 'DineIn' ? "activetab":''}>Dine In</Tabmenu>
          <Tabmenu command={() => handleclick("PartyReservation")} isactive={ChangedText === 'PartyReservation' ? "activetab":''}>Party Reservation</Tabmenu>
        </div>

        <div className='serviceDetailBox'>
          {!ChangedText ?
            <p>Please select an option for information</p> :
            <div>
              {/* change to map statement */}
              <div id='service-head'>{Services[ChangedText].ServiceName}</div>
              <div id='service-count'>Current Allocations : {Services[ChangedText].count}</div>
              <div id='service-body'>{Services[ChangedText].Description}</div>
            </div>
          }
          {/* <div id='service-head'>{Services[ChangedText].ServiceName}</div>
          <div id='service-count'>Current Allocations : {Services[ChangedText].count}</div>
          <div id='service-body'>{Services[ChangedText].Description}</div> */}
        </div>
      </section>

      <section>
        <div id='food'>
          <div id='food-choice'>
            <Foodbutton com={() => foodclick("Indian")}>Indian</Foodbutton>
            <Foodbutton com={() => foodclick("Italian")}>Italian</Foodbutton>
            <Foodbutton com={() => foodclick("Chinese")}>Chinese</Foodbutton>
            <Foodbutton com={() => foodclick("Korean")}>Korean</Foodbutton>
          </div>
          <div id='food-choice-image'>
            {Foodimages[ChangedImage].Image1}
          </div>
        </div>
      </section>

    </div>
  );

}





export default App;
