import logo from '../assets/logo.png'
import { useState } from 'react';
import { CalcProcess } from '../components/CalcProcess';

export function formatNumber (children: number) { 
  return "R$ " + children.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
}


export function Calculator () {
  
  const [number, setNumber] = useState(0)
  const [formatedNumber, setFormatedNumber] = useState("R$0,00")
  const [numberOfInstallments, setNumberOfInstallments] = useState(1)

  return (
    <div className="flex h-screen w-screen justify-center items-center p-4 bg-teal-600">
      <div className="bg-gray-50 drop-shadow-xl h-fit w-full md:max-w-lg box-border rounded-2xl p-6 flex items-center justify-center flex-col">
        <img src={logo} alt="Logotipo da Carol Mueller Fotografia" className='w-20 mb-2' />
        <h1 className='font-medium text-xl mb-4'>Calculadora de taxas</h1>
        <h2 className='mb-2 text-gray-500'>Valor da venda:</h2>
        <input
          title='Valor da venda'
          className='text-center font-bold text-3xl w-64 outline-none border-b-2 border-dotted border-gray-400 bg-gray-50 mb-8' 
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

        <h2 className='mb-2 text-gray-500'>Selecione o parcelamento:</h2>
        
        <select
          name="Parcelamento"
          id="numberOfInstallments"
          className='w-64 bg-gray-50 text-lg outline-teal-600 border-2 rounded p-2 appearance-none bg-customCaret customCaret'
          onChange={(event)=> {
            setNumberOfInstallments(Number(event.target.value));
          }}
        >
          <option defaultChecked value={1}>Crédito à vista (1X)</option>
          <option value={2}>Parcelado 2X</option>
          <option value={3}>Parcelado 3X</option>
          <option value={4}>Parcelado 4X</option>
          <option value={5}>Parcelado 5X</option>
          <option value={6}>Parcelado 6X</option>
          <option value={7}>Parcelado 7X</option>
          <option value={8}>Parcelado 8X</option>
          <option value={9}>Parcelado 9X</option>
          <option value={10}>Parcelado 10X</option>
          <option value={11}>Parcelado 11X</option>
          <option value={12}>Parcelado 12X</option>
        </select>

        <CalcProcess totalValue={number} numberOfInstallments={numberOfInstallments}/>
      </div>
    </div>
  )
}