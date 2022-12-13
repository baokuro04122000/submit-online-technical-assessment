const checkOddOrEven = (number) => (number % 2 === 0) ? true : false

const earnings = (money, rate) => (rate > 0) ? money*(rate/100) : money

const calBalance = (money, year, rateOdd = 20, rateEven = 10) => {
  let result = money;
  for (let i = 1; i <= year; i++){
    if(checkOddOrEven(i)) result = result + earnings(result, rateEven)
    else result = result + earnings(result, rateOdd)
  }
  return result
}
console.log(calBalance(250, 10))
