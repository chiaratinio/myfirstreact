const Greet = (props) =>{
    return(
        <div>
            <h2>I'm {props.name}, <br></br> but you can call me {props.stageName}</h2>
            {props.children}
        </div>
    )
}
export default Greet