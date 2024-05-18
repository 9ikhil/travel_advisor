import axios from 'axios';
import react from 'react';
import { useState } from 'react';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary' ;



const options = {
    // 28.562424515280696, 77.00226108241166
  params: {
    bl_latitude: '19.132659964685388',
    bl_longitude: '72.81476354554816',
    tr_longitude: '72.8520263516671',
    tr_latitude: '19.155076161793634',
    limit: '30',

  },
 headers: {
  'X-RapidAPI-Key': '18d8e4ba88mshd819796c372a2f2p183aafjsnde26e631d9e0',
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
}
};

export const getPlacesData = async() => {
try{
    const {data : {data}} = await axios.get(URL , options);
    return data;
    
}
catch(error){
    console.log(error  , "api kam nahi kar rhi h");
    
}

}

