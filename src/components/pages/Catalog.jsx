import * as React from "react";
import "./product.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import  { useEffect, useState } from 'react';
import img2 from "../../Images/img1.png";
import img3 from '../../Images/mens.jpg';
import img4 from '../../Images/H&K.jpg';
import img5 from '../../Images/kids.jpg';
import img6 from '../../Images/Beauty.jpg';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Input, Stack } from "@mui/material";
import { Form } from "react-router-dom";
import { Margin } from "@mui/icons-material";
import ProductItem from "../reuse/ProductItem";
import Pagination from '@mui/material/Pagination';
// using stepper>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


export default function AlignItemsList() {
  const [itemList , setList] =React.useState([]);
  const getProductList= async()=>{
    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data,"kjuuuuuuuuuuuu");
    setList(data)
    setLength(data.Length);
  }
  

 
 useEffect(()=>{
  getProductList()
 },
    
     [] );

// React.useEffect( async () =>{
//   const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
//  const response = await fetch(url);
//  const data = await response.json();
//  setList(data);
//  setLength(data.Length);
// },[]);
  console.log(itemList[2],"mkkkkkkkkkkkkk");
  
  const [page, setPage] = React.useState(0);
  const [itemLength, setLength] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value+3);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 3 }} className="gridbox">
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={3} sx={{ height: "400px" }}>
            <Item sx={{ maxWidth: 400, bgcolor: "background.paper" }}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>TOP CATAGORIES</ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://unsplash.com/photos/YGmk9UZMdZg"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Women's Fashion" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" />
                  </ListItemAvatar>
                  <ListItemText primary="Men's Fashion" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" />
                  </ListItemAvatar>
                  <ListItemText primary="Home & Kitchen" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" />
                  </ListItemAvatar>
                  <ListItemText primary="Toys, Kids' Fashion & more" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" />
                  </ListItemAvatar>
                  <ListItemText primary="Beauty, Health &amp; Daily Needs" />
                </ListItem>
                <ListItem>MORE CATAGORIES</ListItem>
                <ListItem>
                  <ListItemText primary="Automotives" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mobile & Accessories" />
                </ListItem>{" "}
                <ListItem>
                  <ListItemText primary="Electronics" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sports, Fitness & Outdoor" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Computers & Gaming" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Books, Media & Music" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Hobbies" />
                </ListItem>
                <ListItem>TRENDING SEARCHES</ListItem>
                <ListItem>
                  <ListItemText primary="Kitchen Product" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Shoes For Men" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Kurti Set" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sandal Men" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sport Shoe Men" />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={9} sx={{ height: "400px" }}>
            <Grid item xs={12} sx={{ height: "400px" }}>
            <Grid container spacing={2} sx={{}}>

            
              <Grid item xs={9} sx={{ height: "400px" }}>
              <Item sx={{ height: "300px" }}></Item>
              </Grid>
              <Grid item xs={3} sx={{ height: "400px" }}>
                <Item sx={{ height: "300px", width: "100%" }}>
                  <Card sx={{ maxWidth: 345, minHeight: 300 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={img2}
                      title="green iguana"
                    />
                    <CardContent className="cardcontent">
                      <Typography variant="body2" color="text.secondary">
                        Login to your Snapdeal Account
                      </Typography>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ backgroundColor: "black" }}
                      >
                        Login
                      </Button>
                    </CardContent>
                    <CardActions>
                      <Stack direction="row" spacing={7}>
                        new user?<Button size="small"> Register</Button>
                        <Button size="small" variant="contained">
                          Next
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} sx={{ height: "200px" }} className="trend">TRENDING PRODUCTS
            <Item sx={{ height: "430px", padding:2 }} className=""> 
            <Stack direction={"row"} spacing={2}>

              {/* {[1,2,3].map((item)=>(
                  <ProductItem />
                 
           ) )} */}
           {/* {(itemList.Length)>0?(<>
               </> ):(null)
           
          } */}
<ProductItem  pro={itemList[page]}/>
<ProductItem pro={itemList[page+1]} />
                <ProductItem pro={itemList[page+2]}/>
               
                 
            
            </Stack>
            <Pagination count={15} page={page} onChange={handleChange} />
            </Item>
            
            </Grid>
          </Grid>

        
        </Grid>
      </Box>
     
    </>
  );
}
