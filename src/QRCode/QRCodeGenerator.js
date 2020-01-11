import React from 'react';
import QRCode from 'qrcode.react';

export function createQRCode(data) {
    return (
        <div>
            <QRCode value={data}/>
        </div>
    )
}
