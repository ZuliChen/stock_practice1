import React from "react";

const Output = ({ data, index }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>date</th>
          <th>stock_id</th>
          <th>Trading_Volume</th>
          <th>Trading_money</th>
          <th>open</th>
          <th>max</th>
          <th>min</th>
          <th>close</th>
          <th>spread</th>
          <th>Trading_turnover</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.date}</td>
          <td>{data.stock_id}</td>
          <td>{data.Trading_Volume}</td>
          <td>{data.Trading_money}</td>
          <td>{data.open}</td>
          <td>{data.max}</td>
          <td>{data.min}</td>
          <td>{data.close}</td>
          <td>{data.spread}</td>
          <td>{data.Trading_turnover}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Output;
