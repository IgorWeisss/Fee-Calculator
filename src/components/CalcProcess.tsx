import { formatNumber } from "../pages/Calculator"

interface CalcProps {
  totalValue: number,
  numberOfInstallments: number
}

const calc = {
  spotFee: 0.0299,
  termFee: 0.0349,
  transactionFee: 0.70,
  anticipationFeeRate: 0.0199,
  creditFee: function (totalValue: number, numberOfInstallments: number) {
    return numberOfInstallments ==1 ? totalValue * this.spotFee : totalValue * this.termFee
  },
  anticipationFee: function (totalValue: number, numberOfInstallments: number) {
    let totalFee = 0
  
    for (let i = numberOfInstallments; i > 1; i--) {
  
      let netValue = (totalValue - this.creditFee(totalValue, numberOfInstallments))/numberOfInstallments
      let res = netValue * ((i - 1) * this.anticipationFeeRate)
  
      totalFee += res
    }
  
    return totalFee 
  },
  totalFee: function (totalValue: number, numberOfInstallments: number) {
    return this.transactionFee + this.creditFee(totalValue, numberOfInstallments) + this.anticipationFee(totalValue, numberOfInstallments)
  },
  calculateNetValue: function (totalValue: number, numberOfInstallments: number) {
    return Number((totalValue - this.totalFee(totalValue, numberOfInstallments)).toFixed(2))
  },
  calculateNetValueWithoutFees: function (recievedValue: number, numberOfInstallments: number) {
  
    let totalValue = recievedValue
    let totalRecieved = this.calculateNetValue(totalValue, numberOfInstallments)
  
    while (totalRecieved < recievedValue) {
      totalValue += 0.01
      totalRecieved = this.calculateNetValue(totalValue, numberOfInstallments)
    }
  
    return Number(totalValue.toFixed(2))
  
  }
}

export function CalcProcess ({ totalValue, numberOfInstallments }: CalcProps) {

  if (totalValue == 0) return <></>
  let res = calc.calculateNetValueWithoutFees(totalValue, numberOfInstallments)

  return (
    <div className="mt-8">
      <p>O cliente paga <strong>{formatNumber(res)}</strong></p>
      <p> em {numberOfInstallments} parcelas de <strong>{formatNumber(res/numberOfInstallments)}</strong></p>
    </div>
  )
}