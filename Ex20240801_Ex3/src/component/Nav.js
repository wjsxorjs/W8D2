import { Grid } from "@mui/material";
import Link from "next/link";

export default function Nav(){
    
    const nav_item = [
        {title:"HOME",path:"/"},
        {title:"SERVICE",path:"/service"},
        {title:"COLOR COSMETICS",path:"/color"},
        {title:"SKIN COSMETICS",path:"/skin"},
        {title:"ABOUT",path:"/about"}
    ];
    
    return(
        <nav id="header">
            <Grid container my={2}>
            {nav_item.map((item) => (
                <Grid item key={item.title} xs={12} sm
                      bgcolor='primary.light' p={2}>
                    <Link href={item.path}>{item.title}</Link>
                </Grid>
            ))}
            </Grid>
        </nav>
    );
}