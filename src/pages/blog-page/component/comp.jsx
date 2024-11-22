

import "./comp.css"

export function Comp(props){

  return <div  style={{color: props.color, width:props.width,height:props.height}}  className="AllCompanent">
        <img  style={{color: props.color, width:props.width,height:props.height,margin:props.margimg}}   src={props.src} alt="" />
        <div>
            <p>  {props.text}</p>
            <h1 style={{padding: props.pa}}>{props.name}</h1>
            <h3 style={{padding:props.pa}}>{props.text2}</h3>
            <button style={{display:props.none}}>{props.butText}</button>
        </div>

    </div>
}