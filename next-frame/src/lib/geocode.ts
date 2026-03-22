import { API_KEY } from "./map-keys";


export async function geoCode(query: string) {
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
      'coordinate',
    ].forEach(type => url.searchParams.append('type', type));
    const response = await fetch(url.toString(), {
      mode: 'cors',
    });
    const json = await response.json();
    console.log('geocode', json);
  } catch (ex) {
  	console.log(ex);
  }
}

