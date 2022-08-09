import logo from '../assets/logo.png'
import { useState } from 'react';
import { CalcProcess } from '../components/CalcProcess';

function formatNumber (children: any) { 
  return "R$ " + children.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
}


export function Calculator () {
  
  const [formatedNumber, setFormatedNumber] = useState("R$0,00")
  const [number, setNumber] = useState(0)

  return (
    <div className="flex h-screen w-screen justify-center items-center p-4 bg-teal-600">
      <div className="bg-white h-fit w-full md:max-w-3xl box-border rounded-2xl p-6 flex items-center justify-center flex-col">
        <img src={logo} alt="Logotipo da Carol Mueller Fotografia" className='w-20 mb-2' />
        <h1 className='font-medium text-xl'>Calculadora de taxas</h1>
        <input 
          type='text'
          inputMode='numeric'
          value={formatedNumber}
          id="numberInput"
          onChange={(event) => {
            let num = parseFloat(event.target.value.replace(/[^0-9]+/g, ''))/100
            setNumber(num)
            setFormatedNumber(formatNumber(num))
          }}
        />

        <CalcProcess number={number}/>
      </div>
    </div>
  )
}