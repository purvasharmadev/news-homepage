import { GlobalStyles as GlobalThemeStyles } from "@mui/material";


export default function GlobalStyles(){
    return(
        <GlobalThemeStyles styles={{
            "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                color:'black'
              },
              img:{
                display:'block',
                maxWidth:'100%'
              },
              "& .mb-8px":{
                marginBottom:'8px'
              }
             
              
        }} />

       


    )
}