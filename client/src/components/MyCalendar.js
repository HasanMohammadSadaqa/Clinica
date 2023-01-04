import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
// import io from 'socket.io-client';
const MyCalendar = () => {
  // const [socket] = useState(() => io(':8000'));
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();


  const onChange = newDate => 
    {
    setDate(newDate);
    navigate("/about/"+date)
  }



  return (
    <Calendar value={date} onChange={onChange}/> );
};

export default MyCalendar;