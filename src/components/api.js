import axios from 'axios';

const API_KEY = '6c0197e667mshe3ae4cf333d67a8p178ee6jsnbe828bef6ac9'; // Replace with your actual API key
const API_HOST = 'booking-com15.p.rapidapi.com';

// General API function to fetch data
export const fetchData = async (endpoint, params) => {
  try {
    const response = await axios.get(`https://${API_HOST}/api/v1${endpoint}`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
      },
      params: params
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API', error);
    return null; // Return null in case of an error
  }
};

// API function for searching flights
export const searchFlights = async (from, to, date) => {
  const params = {
    from_location: from,
    to_location: to,
    date: date
  };
  return await fetchData('/searchFlights', params);
};

// API function for searching hotels
export const searchHotels = async (location, checkInDate, checkOutDate) => {
  const params = {
    location: location,
    check_in_date: checkInDate,
    check_out_date: checkOutDate
  };
  return await fetchData('/searchHotels', params);
};

// API function for searching attractions
export const searchAttractions = async (location) => {
  const params = { location: location };
  return await fetchData('/attraction/searchAttractions', params);
};
