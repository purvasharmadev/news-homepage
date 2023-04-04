import { useTheme } from "@mui/material/styles";
import { GlobalStyles as GlobalThemeStyles } from "@mui/material";


export default function GlobalStyles(){
    const theme = useTheme();
    return(
        <GlobalThemeStyles styles={{
            "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
              },
              "& .MuiSvgIcon-root":{
                fontSize:'4rem !important'
              }
        }} />

       


    )
}