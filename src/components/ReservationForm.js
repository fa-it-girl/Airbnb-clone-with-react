import DropdownItem from './DropdownItem';
import Calendar from './Calendar';
import classes from './ReservationForm.module.css';
import { useState } from 'react';



const ReservationForm = (props) => {
  const [reserve, setReserve ]= useState(false);

  const reserveHandler = () =>{
    setReserve('Succesfull')
  }


  return (
    <div style={{boxShadow: ' 2px 2px 5px grey', width: '300px', height: '400px', background: 'white', borderRadius: '15px', fontFamily: "Gill Sans, sans-serif"}}>
    <div className={classes.reservation}>
      <Calendar />
      <DropdownItem />
      <div className={classes.reserveButton}>
        <button onClick={reserveHandler}>Reserve</button>
        <p className={classes.reserveInfos}>{!reserve ? ' ':'Succesfull, you will get an email ASAP!'}</p>
      </div>
    </div>
    </div>
  )
};

export default ReservationForm;
