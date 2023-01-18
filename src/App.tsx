import { useEffect, useState } from "react";

import "./App.css";
import { Link } from "./models/Link";
import { ShortenLinkService } from "./service/ShortenLinkService";

function App() {
  const [updated, setUpdated] = useState<string>("");
  //error when i use Link interface
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const generateLink = () => {
    let datas = new ShortenLinkService();
    datas.getLink(updated).then((res) => {
      setFetchedData([...fetchedData, res]);
    });
  };
  return (
    <>
      <div className="container">
        <h1>GENERATE YOUR SHORTER URL!</h1>
        <div className="inputField">
          <input
            value={updated}
            onChange={(e) => setUpdated(e.target.value)}
            type="text"
            placeholder="paste an url"
          />
          <button onClick={() => generateLink()}>Generate!</button>
        </div>

        {/* map */}
        {fetchedData.map((item, i) => {
          return (
            <>
              <div className="ShowCase">
                <div className="link">
                  <p>{item.result.original_link}</p>
                  <p>{item.result.full_short_link}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        item.result.full_short_link
                      );
                      alert("copied");
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
