import axios from 'axios';




export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data : {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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