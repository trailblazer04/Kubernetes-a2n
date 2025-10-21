// A2N/nextjs-add2num/pages/index.js

import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ num1: Number(num1), num2: Number(num2) }),
    });
    const data = await res.json();
    setResult(data.sum);
    console.log(result);
  };


  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Add Two Numbers</h1>
      <form onSubmit={handleAdd}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number 1"
          required
          style={{ margin: "5px", padding: "5px" }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number 2"
          required
          style={{ margin: "5px", padding: "5px" }}
        />
        <button type="submit" style={{ padding: "5px 10px", marginTop: "10px" }}>
          Add
        </button>
      </form>
      {/* console.log(result); */}
      {result !== null && (
        <h2 style={{ marginTop: "20px" }}>Result: {result}</h2>
      )}
    </div>
  );
}