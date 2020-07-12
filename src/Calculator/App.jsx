import React from 'react'
var tnumber = [];
var numarr;
export default function App(params) {
	function Button(props) {

		function Displayvalue(event) {
			if (event.target.value === 'AC') {
				tnumber = [];
				setResult('');
			}
			else {
				tnumber.push(event.target.value)
			}
			numarr = tnumber.join('')
		}

		return (<>
			<button value={props.type} className="btn btn-outline-success px-4 my-3 py-2" style={{fontSize: "19px" }} onClick={Displayvalue}>{props.type}</button>
		</>)
	}
	const [result, setResult] = React.useState();
	const [number, setNumber] = React.useState();

	function Calculate(event) {
		setNumber(numarr)
	}

	setInterval(Calculate, 10)

	function Result(event) {
		try{
			setResult(eval(numarr));
		}
		catch(e){
			alert("this cannot be calculated!!!")
		}
	}
	
	return (<>
		<div style={{ width:300, height:450, background: "#fff", boxShadow: "2px 2px 20px 13px blue", position: 'absolute', top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
			<Display value={number} res={result} />
			<div className="d-flex justify-content-around">
				<Button type="1" />
				<Button type="2" />
				<Button type="3" />
				<Button type="+"/>
			</div>
			<div className="d-flex justify-content-around">
				<Button type="4" />
				<Button type="5" />
				<Button type="6" />
				<Button type="-" />
			</div>
			<div className="d-flex justify-content-around">
				<Button type="7" />
				<Button type="8" />
				<Button type="9" />
				<Button type="*" />
			</div>
			<div className="d-flex justify-content-around">
				<Button type="AC" />
				<Button type="0" />
				<Button type="." />
				<Button type="/" />
			</div>
				<center><button className="btn btn-outline-danger d-flex justify-content-center attractive_button px-4 py-2" style={{width:200}} onClick={Result}>=</button>
				</center>
		</div>
	</>)
};

function Display(props) {
	return (<>
		<div style={{ height: "17%", backgroundColor: "#86a095", borderBottom: "2px solid black" }}>
			<span className="mx-2 my-5" style={{ fontWeight: 700, letterSpacing: 2, fontSize: "24px" }}>
				{props.value}
			</span><br />
			<span className="mx-2 my-5" style={{ fontWeight: 700, letterSpacing: 2, fontSize: "24px" }}>
				{props.res}
			</span>
		</div>
	</>)
}