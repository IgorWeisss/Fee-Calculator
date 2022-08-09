const calc = {
  spotFee: 0.0299,
  termFee: 0.0349,
  transactionFee: 0.70,
  anticipationFeeRate: 0.0199,
  creditFee: function (totalValue, numberOfInstallments) {
    return numberOfInstallments ==1 ? totalValue * this.spotFee : totalValue * this.termFee
  },
  anticipationFee: function (totalValue, numberOfInstallments) {
    let totalFee = 0
  
    for (let i = numberOfInstallments; i > 1; i--) {
  
      let netValue = (totalValue - this.creditFee(totalValue, numberOfInstallments))/numberOfInstallments
      let res = netValue * ((i - 1) * this.anticipationFeeRate)
  
      totalFee += res
    }
  
    return totalFee 
  },
  totalFee: function (totalValue, numberOfInstallments) {
    return this.transactionFee + this.creditFee(totalValue, numberOfInstallments) + this.anticipationFee(totalValue, numberOfInstallments)
  },
  calculateNetValue: function (totalValue, numberOfInstallments) {
    return (totalValue - this.totalFee(totalValue, numberOfInstallments)).toFixed(2)
  },
  calculateNetValueWithoutFees: function (recievedValue, numberOfInstallments) {
  
    let totalValue = recievedValue
    let totalRecieved = this.calculateNetValue(totalValue, numberOfInstallments)
  
    while (totalRecieved < recievedValue) {
      totalValue += 0.01
      totalRecieved = this.calculateNetValue(totalValue, numberOfInstallments)
    }
  
    return totalValue.toFixed(2)
  
  }
}

module.exports = calc

// Utilização da calculadora

// let withFees = calc.calculateNetValue(110, 3)
// let withoutFees = calc.calculateNetValueWithoutFees(261, 5)

// console.log(withoutFees);