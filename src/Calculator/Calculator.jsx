import React, {useState}from 'react'
export default function Calculator(params) {
	const [first, setFirst] =useState("")
	const [second, setSecond] =useState("")
	const [operator, setOperator] =useState("")
	const [result, setResult] =useState("")
	function Add(event) {
		if (event.target.name === 'first')
			setFirst(event.target.value);
		else
			setSecond(event.target.value)
	}
	function addOperator(event) {
		switch (event.target.name) {
			case 'add': setOperator("+"); break;
			case 'minus': setOperator("-"); break;
			case 'multiply': setOperator("*"); break;
			case 'divide': setOperator("/"); break;
			default: alert("An error occured")
		}
	}
	function Result(event) {
		var f = parseFloat(first)
		var s = parseFloat(second)
		switch (operator) {
			case '+': setResult("= " + (f + s)); break;
			case '-': setResult("= " + (f - s)); break;
			case '*': setResult("= " + (f * s)); break;
			case '/': setResult("= " + (f / s)); break;
			default: alert("An error occured")
		}
	}
	return (
		<div className="mx-5" >

			<div className="container mt-5">
				<div className="p-3 my-3" style={{ color: "white", fontFamily: 'Orbitron', backgroundColor: "#86a095", borderRadius: "10px", fontSize: 40 }}><pre>
				{first}  {operator}  {second}  {result} 
				</pre></div>
				<div className="row">
					<input type="number" id="first" value={first} className="text-center mx-2 col form-control" placeholder="first"
						name="first" onChange={Add} />
					<input type="number" id="second" value={second} className="text-center mx-2 col form-control" placeholder="second"
						name="second" onChange={Add} />
				</div><br />
				<div className="row">
					<center>
						<button className="btn mx-1 col btn-outline-success" name="add" onClick={addOperator}>add</button>
						<button className="btn col mx-1 btn-outline-success" name="minus" onClick={addOperator}>minus</button>
						<button className="btn mx-1 col btn-outline-success" name="multiply" onClick={addOperator}>multiply</button>
						<button className="btn mx-1 col btn-outline-success" name="divide" onClick={addOperator}>divide</button>
					</center>
				</div>
				<br />
				<center><button className="btn btn-outline-success px-5 py-2" name="result" onClick={()=>{Result()}} >=</button>
				<button className="btn btn-outline-success mx-1 px-5 py-2" name="clear" onClick={()=>{setFirst("");setOperator("");setResult("");setSecond("");}} >Clear</button></center>
				<br />

			</div>

		</div>)
};
