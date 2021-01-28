import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {useState} from "react";
import './../Styling/Top.css';

const DropDown = ({on_Select})=>{
    return (
        <DropdownButton
        alignRight
        title="Top Songs"
        id="dropdown-menu-align-right"
        onSelect={on_Select}
          >
                <Dropdown.Item eventKey="short">Short Term</Dropdown.Item>
                <Dropdown.Item eventKey="medium">Medium Term</Dropdown.Item>
                <Dropdown.Item eventKey="long">All Time</Dropdown.Item>
        </DropdownButton>
    )
}

const Display_songs = ({term}) =>{
    const key = 'tracks'.concat('_', String(term));
    const data = JSON.parse(localStorage.getItem(key))
    var titles = []
    var artists = []
    var img_url = []
    for(var i in data){
        var track = data[i]
        titles.push(track['name'])
        artists.push(track['artist'])
        img_url.push(track['img'])
    }
    var listData = img_url.map((item, index) =>
    <ul class="img-item">
        <img className="albums" key={index} src={item}/>
        <div class="details">
          <h3><a class="title">{titles[index]}</a></h3>
          <p class="artist">{artists[index]}</p>
        </div>
    </ul>
    );
    return(
      <div className='row'>
        <div class='column'>{listData.slice(0,10)}</div>
        <div class='column'>{listData.slice(10,20)}</div>
        <div class='column'>{listData.slice(20,30)}</div>
        <div class='column'>{listData.slice(30,40)}</div>
        <div class='column'>{listData.slice(40,50)}</div>
      </div>
    )
  }

const Dashboard= () =>{
    const [value,setValue]= useState('short');

    const handleSelect=(e)=>{
        setValue(e)
      }
    return(
        <div>
         <DropDown on_Select = {handleSelect}/>
         <Display_songs term = {value}/>
        </div>
    )
}

export default Dashboard