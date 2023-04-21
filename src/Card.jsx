import React from 'react'

function Card(props){
    return <div style = {{width : "30%",height : "70%",marginTop : "3%",display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center",boxShadow : " inset 0 0 5px black",marginLeft : "30%",padding :"30px",borderRadius : "8px"}}>
    <div>
        <img src ={props.image}alt = "avatar" width = "100px" height = "100px"/>
    </div>
    <div style = {{display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center"}}>
        <h1 style = {{margin : "5px",padding : "5px"}}>SACHIN KUMAR BISWAL</h1>
         <p style = {{margin : "5px",padding : "5px"}}>I enjoy drinking a cup of coffee every day</p>
    </div>
    <div style = {{width : "300px",display : "flex",flexDirection : "row", justifyContent : "space-around",alignItems : "center",fontSize : "800",fontWeight : "800",color : "#9b45e4"}}>
        <p style = {{margin : "0px",padding : "0px"}}>20</p>
        <p style = {{margin : "0px",padding : "0px"}}>100</p>
        <p style = {{margin : "0px",padding : "0px"}}>100k</p>
    </div>
    <div style = {{width : "320px",display : "flex",flexDirection : "row", justifyContent : "space-evenly",alignItems : "center"}}>

        <p style = {{margin : "0px",padding : "0px"}}>Posts</p>
        <p style = {{margin : "0px",padding : "0px"}}>Followings</p>
        <p style = {{margin : "0px",padding : "0px"}}>Followers</p>

    </div>
    <div style = {{ margin : "15px",padding : "15px",width : "300px", height : "50px",display : "flex",flexDirection : "row", justifyContent : "space-between",alignItems : "center"}}>
        <button style = {{width : "130px",height : "50px",backgroundColor : "#9b45e4",borderRadius : "5px",fontSize : "800",fontWeight : "800",color : "white",display : "flex",justifyContent : "center",alignItems : "center",border : "none"}}>FOLLOW</button>
        <button style = {{width : "130px",height : "50px",backgroundColor : "#e13a9d",borderRadius : "5px",fontSize : "800",fontWeight : "800",color : "white",display : "flex",justifyContent : "center",alignItems : "center",border : "none"}}>MESSAGE</button>

    </div>
    </div>
}

export default Card