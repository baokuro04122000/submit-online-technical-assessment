const express = require('express')

const app = express()

const checkAwesomeNumber = (number) => ((number % 3 === 0 ) || (number % 7 === 0 )) ? true : false
const calSumAwesomeNumber = (number) => {
  let result = 0;
  for(let i = 3; i <= number; i++){
    
    if(checkAwesomeNumber(i)) {
      result = result + i
    }
  }
  return result
}
app.use(express.json())

app.post('/sum-awesome', (req, res) => {
  const {number} = req.body

  res.json({
    result: calSumAwesomeNumber(Number(number))
  })
})

app.listen(3000, () => {
  console.log('server is running at 3000')
})