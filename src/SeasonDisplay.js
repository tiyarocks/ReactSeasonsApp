import React from "react"

//webpack takes the content and sticks it into index.html
import "./SeasonDisplay.css"
const seasonConfig={
    summer:{
        text:"Lets hit the beach",
        iconName:"sun"

    },
    winter:{
        text:"burr its cold",
        iconName:"snowflake"
    }
}

const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0?"summer":"winter"
    }
    else{
        return lat>0?"winter":"summer"
    }
}

const SeasonDisplay=props=>{
    const season=getSeason(props.lat,new Date().getMonth())
    //destructuring text n iconName from seasonConfig
    const {text,iconName}=seasonConfig[season]//{text.iconName}
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}
export default SeasonDisplay