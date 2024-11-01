import React from 'react';
import IMCCalculadora from './components/IMCCalculadora';

const App = () => {
  return (
    <div style={{ backgroundColor: '#333', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <IMCCalculadora/>
    </div>
  );
};

export default App;
