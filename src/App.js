import React from 'react';
import { scanQRCode, createQRCode } from './QRCode';

function App() {
  return (
    <div>
     {scanQRCode()}
     {createQRCode('I love Code!')}
    </div>
  )
}

export default App;