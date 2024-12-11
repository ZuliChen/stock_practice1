import Search from "./components/Search";
import Output from "./components/Output";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://api.finmindtrade.com/api/v4/data";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRlIjoiMjAyNC0wOS0xMCAwNjozMjozMiIsInVzZXJfaWQiOiJzdG9ja3R3IiwiaXAiOiI3Mi44OS4yMjEuMTY2In0.St42h3pquRIMGgq24fwDdeEQckGf2cZY9UuZ3qs22jg";

  let [data, setData] = useState([]);
  let [params, setParams] = useState({});

  useEffect(() => {
    if (params.start_date && params.end_date && params.data_id) {
      let fetchData = async () => {
        let response = await axios.get(url, {
          params: params,
          headers: {
            Authorization: apiKey,
          },
        });
        setData(response.data.data);
      };
      fetchData();
    }
  }, [params]);

  return (
    <div>
      <Search setParams={setParams} />
      <div id="outputs">
        {data.map((d, index) => {
          return <Output data={d} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
