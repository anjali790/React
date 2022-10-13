import { useEffect } from "react";
// import React,{useEffect} from 'react'
import axios from 'axios';

export default function Instagram() {
  useEffect(() => {
    // const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://hashtagy-generate-hashtags.p.rapidapi.com/v1/banned_tags',
      headers: {
        'X-RapidAPI-Key': 'b07e006b79msh0115f64a28516d4p1c5992jsnceb9253b84c0',
        'X-RapidAPI-Host': 'hashtagy-generate-hashtags.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  });


  return (
    <div>Instagram</div>
  )
}
