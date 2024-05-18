import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";


// import Rating from '@material-ui/lab/Rating';

const Placedetails = ({place , selected , refProp}) => {

  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  console.log(selected , refProp);

  return (
<div className = "place_details_main">
  <div className='place_details'>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
            image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Box className='box'  justifyContent="space-between" my={2}>
               <Typography name="read-only" value={Number(place.rating)} readOnly /> 
              <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
          </Box>
            <Box className='box'  justifyContent="space-between">
            <Typography component="legend">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
                {place.price_level}
            </Typography>
          </Box>
            <Box className='box' justifyContent="space-between">
            <Typography component="legend">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {Number[place.latitude]}
            </Typography>
          </Box>
          {place?.awards?.map((award) => (
              <Box className='box'  justifyContent="space-between" my={1} alignItems="center">
              <img src={award.images.small} />
                <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}
            <Typography component="legend">cusines</Typography>
          {place?.cuisine?.map(({ name }) => (
                
              <Chip key={name} size="small" label={name} className='chip' />
          ))}
          {place.address && (
              <Typography gutterBottom variant="body2" color="textSecondary" >
                <CiLocationOn color='green' size='1.5rem' />{place.address}
            </Typography>
          )}
          {place.phone && (
              <Typography variant="body2" color="textSecondary" className='spacing'>
                <CiPhone color='red' size='1.5rem'/> {place.phone}
            </Typography>
          )}
        </CardContent>
      
        </Card>
    </div>
</div>
    
        
  );
};


export default Placedetails