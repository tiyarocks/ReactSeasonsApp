import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"


class App extends React.Component{

    state={lat:null,errorMssg:"" }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({
                    lat : position.coords.latitude
                })
            },
            err=>{
                this.setState({
                    errorMssg:err.message
                })
            }
        )
    }
    //react calls our render method a second time
    render(){
        //conditional rendering
           if(this.state.errorMssg&&!this.state.lat){
                return (
                    <div>
                        Error:{this.state.errorMssg}
                    </div>
                )
           }


           if(!this.state.errorMssg&&this.state.lat){
                return (
                    <SeasonDisplay lat={this.state.lat}/>
                )
            }

            return  (
                <div>
                    <Spinner message="Plz accept location request"/>
                </div>
            )
    }
        
}
ReactDOM.render(<App/>,document.querySelector("#root"))