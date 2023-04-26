import { useState } from "react";
import DatePicker from "react-datepicker";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div style={{display:'grid',
                 gridTemplateColumns:'1fr 1fr',
                 gridGap: '0px',
                 width: '250px',
                 borderTop: '0.5px solid grey',
                 borderRight: '0.5px solid grey ',
                 borderLeft: '0.5px solid grey',
                 borderTopLeftRadius: '15px',
                 borderTopRightRadius: '15px'
                 }}>
      <div style={{width: '125px',
                  borderRight: '0.5px solid grey',
                  marginLeft: '10px'}}>
        <p>Starting day</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div style={{width: '125px', paddingLeft: '5px', marginLeft: '10px'}}>
        <p>End day</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default Calendar;
