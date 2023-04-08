
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import {blogImgOne,blogImgTwo,blogImgThree} from "../constant"



function Blogs({id,index,title,paragraph}){
    const imgs = [blogImgOne,blogImgTwo,blogImgThree]
    return(
        <Grid container direction={'row'} alignItems={'center'} padding={1} spacing={2}>
            <Grid item lg={4}>
                <img height="130px" width="120px" src={imgs[id]} alt="blogs" />
            </Grid>
            <Grid item lg={8}>
            <Typography className="mb-8px" style={{fontSize:'40px',color:'hsl(233, 8%, 79%)'}}> 
                   {index}
            </Typography>
                
                <Typography className="mb-8px">
                {title}
                </Typography>
                <Typography sx={{fontSize:'15px',color:'hsl(236, 13%, 42%)'}}>
               {paragraph}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Blogs