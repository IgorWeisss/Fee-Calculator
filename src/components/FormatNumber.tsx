import numeral from "numeral"

interface Props {
  children: number,
}

export function FormatNumber (props: Props) { 

if (numeral.locales['br'] === undefined) {
  numeral.register('locale', 'br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: 'R$'
    }
  })
}

numeral.locale('br')


let res = numeral(props.children).format('$0,0.00')

  return (
    <>{res}</>
  )
}