import { API_KEY } from "./map-keys";
import { AddressProps, GeoItem, GeoJsonResponse, GeoType } from "./map-types";
 

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
    const json = await response.json() as GeoJsonResponse;
    console.log('geocode', json);
    const pickRegionType = (i:number, geoType: GeoType) => 
      json.items[i].regionalStructure.filter(reg => reg.type === geoType).join(', ') || '' as string

    const addresses = json.items.map((item: GeoItem, key: number) => ({
      id : -1,
      region: pickRegionType(key, 'regional.region'),
      municipality: pickRegionType(key, 'regional.municipality'),
      district: pickRegionType(key, 'regional.municipality_part'),
      street: pickRegionType(key, 'regional.street'),
      houseNumber: pickRegionType(key, 'regional.address'),
      postalCode: item.zip,
      coordinates: [item.position.lat, item.position.lon]
    })) as AddressProps[] 

  } catch (ex) {
  	console.log(ex); 
  }
}

