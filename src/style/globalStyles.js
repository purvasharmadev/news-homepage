import { GlobalStyles as GlobalThemeStyles } from "@mui/material";


export default function GlobalStyles(){
    return(
        <GlobalThemeStyles styles={{
            "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
              },
              
        }} />

       


    )
}