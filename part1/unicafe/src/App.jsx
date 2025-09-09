import { useState } from 'react'

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
  
  const total = good + neutral + bad
  const average = total && (good - bad) / total
  const positive = total && (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
        <button onClick={goodCount}>good</button>
        <button onClick={neutralCount}>neutral</button>
        <button onClick={badCount}>bad</button>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
    </div>
  )
}

export default App