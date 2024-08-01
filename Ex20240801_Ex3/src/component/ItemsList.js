import { Grid } from "@mui/material";

export default function ItemsList(props) {
    const list = props.itemList;
    return (
        <Grid container>
            {list.map((item)=>(
            <Grid item key={item.id} xs={3}>
                <img src={item.image_link} alt={item.name} title={item.name}/>
                <div>{item.name}</div>
            </Grid>
            ))}
        </Grid>
    )
  }
  