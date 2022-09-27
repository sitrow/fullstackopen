import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <tbody>
      <tr>
        <th>{props.text}</th> 
        <th>{props.value}</th>
      </tr>
    </tbody>    
  )
}

const Statitics = (props) => {
  if (props.all === 0){
    return (      
      <div>        
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <StatisticsLine text={'Good'} value={props.good}/>
        <StatisticsLine text={'Neutral'} value={props.neutral}/> 
        <StatisticsLine text={'Bad'} value={props.bad}/> 
        <StatisticsLine text={'All'} value={props.all}/> 
        <StatisticsLine text={'Average'} value={props.average}/> 
        <StatisticsLine text={'Positive'} value={props.positive}/>       
      </table>      
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)  
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState("")
  
  const handleGood = () => {
    let up_good = good + 1
    let up_all = all + 1
    let up_positive = (up_good/up_all) * 100
    up_positive += ' %'
    setGood(up_good)
    setAll(up_all)    
    setAverage((up_good - bad)/up_all)
    setPositive(up_positive)
  }

  const handleNeutral = () => {
    let up_neutral = neutral + 1
    let up_all = all + 1
    let up_positive = (good/up_all) * 100
    up_positive += ' %'
    setNeutral(up_neutral)
    setAll(up_all)
    setAverage((good - bad)/up_all)
    setPositive(up_positive)
  }

  const handleBad = () => {
    let up_bad = bad + 1
    let up_all = all + 1
    let up_positive = (good/up_all) * 100
    up_positive += ' %'
    setBad(up_bad)
    setAll(up_all)
    setAverage((good - up_bad)/up_all)
    setPositive(up_positive)
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>
      <h2>Statistics</h2>
      <Statitics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App
