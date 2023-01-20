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
import Login from '../pages/Login';
import img2 from "../../Images/c2.jpg";
import img8 from "../../Images/ca1.jpg";
import img3 from '../../Images/WF.jpg';
import img7 from '../../Images/mens.jpg';
import img4 from '../../Images/H&K.jpg';
import img5 from '../../Images/kids.jpg';
import img6 from '../../Images/Beauty.jpg';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Input, Stack } from "@mui/material";
import Carousel from "./Carousel";
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
 
  

 
 
  return (
    <>
   <Box sx={{ flexGrow: 1, padding: 7 }} className="gridbox">
    <Grid container  sx={{minHeight:60 , padding:2,backgroundColor:"green",marginTop:"14px"}}></Grid>
      <Grid container divider={<Divider orientation="vertical" flexItem />} sx={{minHeight:250 , padding:4}}>
      <Grid Item xs={6 }>
      <Stack direction="row">
        <Avatar src={img5} variant="square" margin="20px" sx={{height:200,width:180 }}></Avatar>
        <Typography padding={2}>POWAFORCE Steel Kitchen Press 12 pc Jaalis for Murukku/Cookies/Noodles/Indian</Typography>
      </Stack>
      </Grid>
      <Grid Item xs={6}>
        <Stack direction="row">
          <Typography>Your Order 3 Items
You Pay: Rs. 754
</Typography>
<Button size="large" sx={{backgroundColor:"red" , height:"50px",minWidth:"200px"}}>Proceed to Checkout</Button>
<Button size="large" sx={{backgroundColor:"black", height:"50px",minWidth:"200px"}}>Veiw Cart</Button>
        </Stack>
      </Grid>
      
      </Grid>
      </Box>
    </>
  );
}
