import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import Vacs from './Vacs';


// import io from 'socket.io-client';
const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};
const MyCalendar = () => {
  // const [socket] = useState(() => io(':8000'));
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  
  const onChange = newDate => {

    const formattedDate=encodeURIComponent(new Date(newDate).toLocaleDateString('en-US', options))
 
    
    setDate(newDate);

    navigate("/book/" + "'"+formattedDate+"'")
  }



  return (

    <Calendar value={date} onChange={onChange} />


  );
};

export default MyCalendar;