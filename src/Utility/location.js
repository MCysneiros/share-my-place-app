const GOOGLE_API_KEY = 'AIzaSyAB7RHB9LtQokGf6ILnk5shGK38IKtyTWQ';
export const getCoordsFromAddress = async (address) => {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress},+Mountain+View,+CA&key=${GOOGLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch your address');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
};
