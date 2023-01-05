import React from 'react'
import '../App.css';
import MyCalendar from '../components/MyCalendar'
import {Routes,Route} from "react-router-dom";
// import { useParams } from 'react-router-dom';
import Vacs from '../components/Vacs';

const Book = () => {
  return (
    <div className="App">
      <p>Hello</p>
      <MyCalendar/>


    </div>
  )
}

export default Book