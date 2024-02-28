import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
const axios = require('axios');

export const getLocation = async (req: Request, res: Response) => {
    let phone=req.query.phone
    const options = {
        method: 'POST',
        url: 'https://location-retrieval.p-eu.rapidapi.com/retrieve',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'fb95ed024amshdb1ad69f7928f18p1de4c5jsn1782e8f1e955',
          'X-RapidAPI-Host': 'location-retrieval.nokia.rapidapi.com'
        },
        data: {
          device: {
            phoneNumber: phone
          },
          maxAge: '60'
        }
    };

    async function runProcess() {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data
        } catch (error) {
            console.error(error);
            return error
        }
    }
    
    res.json(await runProcess())


};



export const verifyLocation = async (req: Request, res: Response) => {
  let phone=req.query.phone //string
  let lat=req.query.lat //double
  let lon=req.query.lon //double
  const options = {
      method: 'POST',
      url: 'https://location-verification.p-eu.rapidapi.com/verify',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fb95ed024amshdb1ad69f7928f18p1de4c5jsn1782e8f1e955',
        'X-RapidAPI-Host': 'location-verification.nokia.rapidapi.com'
      },
      data: {     
          "device": {
              "phoneNumber": phone
          },
          "area": {
              "areaType": "Circle",
              "center": {
                  "latitude": lat,
                  "longitude": lon
              },
              "radius": 1000
          },
          "maxAge": 60  
      }
  };

  async function runProcess() {
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data
      } catch (error) {
          console.error(error);
          return error
      }
  }
  
  res.json(await runProcess())
}
