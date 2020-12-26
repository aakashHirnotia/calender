import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();

function App() {
  return (
    <div className="App" style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <InfiniteCalendar
        width={800}
        height={600}
        selected={today}
        displayOptions={{
          showHeader: false,
        }}
        // disabledDays={[0,6]}
        // minDate={lastWeek}
        rowHeight={120}
      />
    </div>
  );
}

export default App;
