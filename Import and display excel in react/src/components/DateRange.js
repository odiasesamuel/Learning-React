import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from './DateRange.module.css'; // Import the CSS module

const DateRangePicker = () => {
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setSelectedDates([ranges.selection]);
  };

  return (
    <div>
      <DateRange
        className={styles['react-calendar']} // Apply custom styles to the calendar container
        ranges={selectedDates}
        onChange={handleSelect}
      />
      <div>
        <strong>Selected Dates:</strong>
        <ul>
          {selectedDates.map(({ startDate, endDate }, index) => (
            <li key={index}>{`${startDate.toDateString()} - ${endDate.toDateString()}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DateRangePicker;
