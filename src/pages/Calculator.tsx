import logo from '../assets/logo.png'
import { useState } from 'react';
import numeral from "numeral"

function FormatNumber (children: any) { 

if (numeral.locales['pt-br'] === undefined) {
  numeral.register('locale', 'pt-br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'mil',
        million: 'milhões',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return 'º';
    },
    currency: {
        symbol: 'R$'
    }
  });
}

numeral.locale('pt-br')


let res = numeral((children/100)).format('$0,0.00')

  return res
}


export function Calculator () {
  
  const [number, setNumber] = useState('R$0,00')

  return (
    <div className="flex h-screen w-screen justify-center items-center p-4 bg-teal-600">
      <div className="bg-white h-fit w-full md:max-w-3xl box-border rounded-2xl p-6 flex items-center justify-center flex-col">
        <img src={logo} alt="Logotipo da Carol Mueller Fotografia" className='w-20 mb-2' />
        <h1 className='font-medium text-xl'>Calculadora de taxas</h1>
        <input 
          type='text'
          inputMode='numeric'
          value={number}
          id="numberInput"
          onChange={(event) => {
            let num = event.target.value.replace(/[^0-9]+/g, '')
            setNumber(FormatNumber(num))
          }}
        />
      </div>
    </div>
  )
}