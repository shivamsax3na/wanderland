import React from 'react'

function primeOrNot(){
    var a, b, c;
    a = Number(document.getElementById("input").value);
    for(b=2;b<a;b++){
        console.log(a, " ", b)
        if(a%b==0){
            console.log(a, " ", b )
            c = false;
            break;
        }
    }
    if(c===true){
        return document.getElementById("res").innerHTML="Prime"
    }
    else{
        return document.getElementById("res").innerHTML="Not Prime"
    }
}

export default function Header() {
    return (
        <div>
            <br /><br /><br />
            <center>
            enter num : <input type="text" id="input"/><br /><br />
            <button className="btn btn-dark" onClick={primeOrNot}>Check</button>
            <br /><br />
            <p id="res"></p>
            </center>
        </div>
    )
}