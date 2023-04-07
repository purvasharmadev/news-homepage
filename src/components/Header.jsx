import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { headerBanner } from "../constant";

function Header() {
  return (
      <Container>
      <img  src={headerBanner} alt="banner" />
      <Grid container direction={'row'} alignItems={'center'} justifyContent={'space-between'} paddingY={2}>
        <Grid item sm={4} lg={5}>
        <Typography variant="h3" sx={{lineHeight:'100%'}}>
       The Bright Future of Web 3.0
      </Typography>
        </Grid>
      <Grid item sm={8} lg={7}>
      <Typography sx={{fontSize:'15px',padding:'0 0 2rem 0'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        dolorum quo ad, numquam pariatur magni eius? Temporibus dignissimos,
        repellat, nostrum nobis sequi quis odit consequatur dolores consequuntur
        ex natus harum?
      </Typography>
      <Button sx={{ backgroundColor:'hsl(5, 85%, 63%) !important',
                borderRadius:'0 !important'}} size="large" variant="contained">
        READ MORE
      </Button>
      </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
