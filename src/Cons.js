import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const onClickGetToDo = () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  };
  useEffect(() => {}, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <button onClick={onClickGetToDo}>Get Coins</button>
      <hr />
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin, idx) => {
          return (
            <li key={coin.id}>
              {coin.name} ({coin.symbol})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
