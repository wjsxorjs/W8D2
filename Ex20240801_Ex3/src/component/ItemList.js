import { Card, CardContent, CardMedia, Grid } from "@mui/material";

export default function ItemList(props) {
    const list = props.itemList;
    return (
        <Grid container >
            {list.map((item)=>(
                <Grid item key={item.id} xs={3}>
                    <Card style={{margin: '5px',textAlign: 'center'}}>
                    {/* <CardMedia
                        sx={{ height: '200px'}}
                        image={item.image_link}
                        title={item.name}
                    /> */}
                        <CardContent>
                            <img src={item.image_link} alt={item.name} title={item.name}/>
                            <div style={{textOverflow: 'ellipsis', overflow:'hidden', whiteSpace: "nowrap" ,width:'100%'}}>
                                <strong>{item.name}</strong>
                                </div>
                            <div style={{textAlign: 'center'}}>[${item.price}]</div>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
  }
  