import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total && (good - bad) / total
  const positive = total && (good / total) * 100

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + '%'} /> 
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodCount = () => {
    setGood(good + 1);
  };
   const neutralCount = () => {
    setNeutral(neutral + 1);
  };
   const badCount = () => {
    setBad(bad + 1);
  };
  
if (good + neutral + bad != 0) {
  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={goodCount} text="good"></Button>
        <Button handleClick={neutralCount} text="neutral"></Button>
        <Button handleClick={badCount} text="bad"></Button>
      <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}else{
  return (
      <div>
        <h1>give feedback</h1>
          <Button handleClick={goodCount} text="good"></Button>
          <Button handleClick={neutralCount} text="neutral"></Button>
          <Button handleClick={badCount} text="bad"></Button>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
}
}

export default App