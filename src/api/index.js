import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (sw, ne) => {
    try {
        const { data : {data} } = await axios.get(URL, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': '043e5cdcc9msh0082aa76e7d97d1p195d1ajsnf63c6b0342a7',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              });

        return data;
    }
    catch (error) {
        console.log(error);
    }
}