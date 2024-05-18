import React from 'react'

const { ipcRenderer } = window.require('electron')

const PrintButton = () => {
  const handlePrint = () => {
    const options = {
      preview: false,
      margin: '0 0 0 0',
      copies: 1,
      printerName: 'Xprinter',
      silent: true,
      pageSize: '40mm'
    }

    const dataToPrint = [
      {
        type: 'text',
        value: 'hello world',
        style: { fontSize: '16px', fontWeight: '700' }
      },
      {
        type: 'text',
        value: '2000 DA',
        style: { fontSize: '16px', fontWeight: '700' }
      },
      {
        type: 'barCode',
        value: '023456789010',
        height: 12, // height of barcode, applicable only to bar and QR codes
        width: 1, // width of barcode, applicable only to bar and QR codes
        fontsize: 8
      }
    ]

    ipcRenderer.send('print', dataToPrint, options)
  }

  return <button onClick={handlePrint}>Print</button>
}

export default PrintButton
