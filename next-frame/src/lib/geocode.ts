import { API_KEY } from "./map-keys";


export async function geoCode(data: FormData) {
  const query = data.get('query') as string
  if(!query) return 
  try {
    const url = new URL(`https://api.mapy.cz/v1/geocode`);
    url.searchParams.set('lang', 'cs');
    url.searchParams.set('apikey', API_KEY);
    url.searchParams.set('query', query);
    url.searchParams.set('limit', '15');
    [
      'regional.municipality',
      'regional.municipality_part',
      'regional.street',
      'regional.address',
    ].forEach(type => url.searchParams.append('type', type));
    
    const response = await fetch(url.toString(), { mode: 'cors' });
    const json = await response.json();
    console.log('geocode', response);
/*
{
  bbox: [13.771978378295898, 50.61357498168945, 13.875493049621582, 50.6771240234375],
  label: "Statutární město",
  location: "Česko",
  name: "Teplice",
  position: {
    lat: 50.6404,
    lon: 13.82451
  },
  regionalStructure: [{
  name: "Teplice",
  type: "regional.municipality"
}, {
  name: "okres Teplice",
  type: "regional.region"
}, {
  name: "Ústecký kraj",
  type: "regional.region"
}, {
  isoCode: "CZ",
  name: "Česko",
  type: "regional.country"
}],
  type: "regional.municipality"
}
*/

    const addresses = (json.items || []).map((item: any) => ({
      label: item.label,
      street: item.street,
      houseNumber: item.house_number,
      city: item.city,
      municipality: item.municipality,
      region: item.region,
      postalCode: item.postal_code,
      country: item.country,
      coordinates: item.position, // usually {lat, lon}
    }));
    console.log('addresses', addresses);
    } catch (ex) {
  	console.log(ex); 
  }
}

