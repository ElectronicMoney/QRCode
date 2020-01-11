import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
class QRCodeScannner extends Component {

  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: null,
    }
 
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    if (this.state.result == null) {
        this.setState({
            result: data,
        })
    }
  }

  handleError(err){
    console.error(err)
  }
  
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return this.state.result ? this.state.result: (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    )
  }
}

//Scan the QRCode and return its value
export function scanQRCode() {
  return <QRCodeScannner />
}