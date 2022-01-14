import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [feed, setFeed] = useState();
  useEffect(() => {
    async function fetchFeed() {
      const res = await fetch("/feed");
      if (!res.ok) {
        throw Error("couldn't fetch feed");
      }
      const body = await res.json();
      setFeed(body);
    }
    fetchFeed();
  }, []);

  return (
    <div className="App">
      Hello world!
      {feed?.items.map((item) => {
        return <a href={item.link}>{item.title}</a>;
      })}
    </div>
  );
}

export default App;
