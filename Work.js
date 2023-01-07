
import butn from "./button.png"

function Work(props){

  return(

    <div id="rect3" className={props.name}>

        <div  onClick={()=>props.handle(props.alpha,props.name,props.dname)}>
          <img src={butn}/>
        </div>

        <div>
          <h3 id="des" className={props.dname}>{props.name}</h3>
        </div>
    </div>

  )

}

export default Work;