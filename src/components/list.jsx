import React from "react";
import { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import Placedetails from "./placedetails";



const List = ( { places , childclicked , selected } ) => {


  const [elRefs, setElRefs] = useState([]);
  const [type, setType] = useState("restraunt");
  const [rating, setRating] = useState("0");
  
  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);
  

 
  return (
    <div className="main_listed">
      <div>
        <h1>Restraunts , Hotels and Attraction</h1>
      </div>

      <div className="main_list1">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
          <InputLabel id="demo-simple-select-standard-label">
            Type
          </InputLabel>
          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel  id="demo-simple-select-standard-label" >
            Rating
          </InputLabel>
          <Select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={8}>
          {places?.map((place, i) => (
             <Grid ref={elRefs[i]} key={i} item xs={12}>
             <Placedetails selected={Number(childclicked) === i} refProp={elRefs[i]} place={place} />
           </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default List;
