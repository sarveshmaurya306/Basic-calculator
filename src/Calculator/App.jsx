import React from 'react'
var tnumber=[];
var numarr;
export default function App(params) {
		function Button(props){

			function Displayvalue(event){
				if(event.target.value==='AC'){
					tnumber=[];
					setResult('');
				}
				else{
					tnumber.push(event.target.value)
				}
				numarr=tnumber.join('')
			}
			
			return(<>
				<button value={props.type} className="attractive_button px-4 my-3 py-2" onClick={Displayvalue}>{props.type}</button>
			</>)
		}
	const [result,setResult]=React.useState();
	const [number, setNumber]=React.useState();

	function Calculate(event){
		setNumber(numarr)
	}

	setInterval(Calculate,100)

	function Result(event){
		var index=0;
		var op='+';
		for(var i=0;i<numarr.length;i++){
			if(numarr[i]==='+' || numarr[i]==='-' || numarr[i]==='*' || numarr[i]==='/'){
				index=i;
				op=numarr[i];
				break;
			}
		}
		// console.log(typeof(word.join('')))
		// console.log(index)
		var first=parseInt(numarr.slice(0,index))
		var second=parseInt(numarr.slice(index+1,))
		switch(op){
			case '+':setResult(first+second);break;
			case '-':setResult(first-second);break;
			case '*':setResult(first*second);break;
			case '/':setResult(first/second);break;
			default: setResult(" ");
		}
	}
	return(<>
		<div style={{width:"300px",height:400, background:"white",boxShadow:"2px 2px 10px 13px blue",position:'absolute',top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
			<Display value={number} res={result}/>
			<div className="d-flex justify-content-around">
				<Button type="1"/>
				<Button type="2"/>
				<Button type="3"/>
				<Button type="+" />
			</div>
			<div className="d-flex justify-content-around">
				<Button type="4"/>
				<Button type="5"/>
				<Button type="6"/>
				<Button type="-"/>
			</div>
			<div className="d-flex justify-content-around">
				<Button type="7"/>
				<Button type="8"/>
				<Button type="9"/>
				<Button type="*" />
			</div>
			<div className="d-flex justify-content-around">
				<Button type="AC"/>
				<Button type="0"/>
				<button className="attractive_button px-4 my-3 py-2" onClick={Result}>=</button>
				<Button type="/"/>
			</div>
		</div>
	</>)
};


function Display(props){
	return(<>
		<div style={{height:"20%",backgroundColor:"#86a095",borderBottom:"1px solid black"}}>
			<span className="mx-2 my-5" style={{fontFamily:"Orbitron",fontSize:"24px"}}>
				{props.value}<br/>{props.res}
			</span>
		</div>
		</>)
}
