import logo from '../assets/logo.png'
import NumberFormat from 'react-number-format';
import { FormatNumber } from '../components/FormatNumber';

export function Calculator () {
  return (
    <div className="flex h-screen w-screen justify-center items-center p-4 bg-teal-600">
      <div className="bg-white h-fit w-full md:max-w-3xl box-border rounded-2xl p-6 flex items-center justify-center flex-col">
        <img src={logo} alt="Logotipo da Carol Mueller Fotografia" className='w-20 mb-2' />
        <h1 className='font-medium text-xl'>Calculadora de taxas</h1>
        <NumberFormat thousandSeparator={"."} decimalSeparator={","} allowEmptyFormatting={true} decimalScale={2} prefix={'R$'} />
        <FormatNumber children={1234.56}/> 
        {/* Colocar um input aqui com evento onChange */}
      </div>
    </div>
  )
}