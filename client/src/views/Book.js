import React from 'react'
import '../App.css';
import MyCalendar from '../components/MyCalendar'
import {Routes,Route} from "react-router-dom";
// import { useParams } from 'react-router-dom';
import Vacs from '../components/Vacs';

const Book = () => {
  return (
    <div className="App">
      <h1 className="text-left" style={{padding:"20ps", margin:"20px 20px"}}>Please select a date:</h1>
      <div style={{margin:"50px 50px"}}>
      <MyCalendar/>
      </div>
      


    </div>
  )
}

export default Book