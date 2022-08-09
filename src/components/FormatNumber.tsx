import numeral from "numeral"

interface Props {
  children: any,
}

export function FormatNumber (props: Props) {
  
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

let res = numeral(props.children).format('$0,0.00')

  return (
    <>{res}</>
  )
}