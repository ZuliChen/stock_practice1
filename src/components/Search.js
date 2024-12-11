import React, { useState } from "react";

const Search = ({ setParams }) => {
  let [start_date, setStart_date] = useState("");
  let [end_date, setEnd_date] = useState("");
  let [data_id, setData_id] = useState("");

  const buttonHandler = () => {
    if (start_date && end_date && data_id) {
      setParams({
        dataset: "TaiwanStockPrice",
        data_id: data_id,
        start_date: start_date,
        end_date: end_date,
      });
    } else {
      alert("請輸入起迄日與股票代碼");
    }
  };

  return (
    <div className="search">
      <input
        type="date"
        name="start_date"
        id="start_date"
        onChange={(e) => setStart_date(e.target.value)}
      />
      <input
        type="date"
        name="end_date"
        id="end_date"
        onChange={(e) => setEnd_date(e.target.value)}
      />
      <input
        type="text"
        name="data_id"
        id="data_id"
        onChange={(e) => setData_id(e.target.value)}
      />
      <button onClick={buttonHandler}>開始查詢</button>
    </div>
  );
};

export default Search;
