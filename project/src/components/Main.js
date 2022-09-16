import React, {Component} from "react";

export class Main extends Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <>
            <main>
            <p className="para">Para no. {this.props.paraNo} </p>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed temporibus doloribus quidem sapiente suscipit veritatis dolorum hic nulla! Quia, incidunt. Id quam exercitationem enim rerum, est blanditiis dolorum quae</p>
            <button className="btn">click here</button>
            </main>
            </>
        )
    }
}