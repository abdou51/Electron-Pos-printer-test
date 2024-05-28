const { ipcRenderer } = window.require('electron')

const PrintButton = () => {
  const handlePrint = () => {
    const options = {
      preview: false,
      copies: 1,
      margin: '0 0 0 0',
      printerName: 'XP-80C',
      silent: true,
      pageSize: '40mm'
    }

    const dataToPrint = [
      {
        type: 'text',
        value: '2000 DA',
        style: { fontSize: '18px', fontWeight: '800', textAlign: 'left' }
      },
      // {
      //   type: 'text',
      //   value: '2000 DA',
      //   style: { fontSize: '14px', fontWeight: '800', textAlign: 'left' }
      // },
      {
        type: 'barCode',
        value: '308488224',
        height: 18,
        width: 1,
        fontsize: 12,
        displayValue: true,
        style: { fontSize: '16px', fontWeight: '800', textAlign: 'left' }
      }
    ]

    ipcRenderer.send('print', dataToPrint, options)
  }

  return <button onClick={handlePrint}>Print</button>
}

export default PrintButton
