import React, { useState } from "react";
import dataJson from "./../data.json";
import { parse } from "postcss";

const Table = ({ data, setData }) => {
  // console.log(data,'data')
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Nama</th>
          <th>Age</th>
          <th>Occupation</th>
        </tr>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Tes5() {
  const [data, setData] = useState(dataJson);
  const [text, setText] = useState("");
  const [limit, setLimit] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Cari nama user"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (e.target.value !== "") {
              setData(
                data.filter((item) => {
                  return item.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                })
              );
            } else {
              setData(dataJson);
            }
          }}
        />
        <select
          onChange={(e) => {
            setLimit(parseInt(e.target.value));
            setcurrentPage(1);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <Table
        data={data.slice((currentPage - 1) * limit, limit * currentPage)}
        setData={setData}
      />

      {/* paging button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            if (currentPage > 1) {
              setcurrentPage(currentPage - 1);
            }
          }}
        >
          Previous
        </button>
        <div>
          <span>{currentPage}</span> from{" "}
          <span>{Math.ceil(data.length / limit)}</span>
        </div>
        <button
          onClick={() => {
            if (currentPage < Math.ceil(data.length / limit)) {
              setcurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Tes5;
