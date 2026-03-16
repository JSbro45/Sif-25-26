## Hooks
> ulehčují změnu dat v aplikaci

- useState - když se data změní, umožňuje rerender, základní hook

```
function Number() {
  const [number, setNumber] = useState("1");

  return (
    <>
      < h 1 >Číslo: {number}< /  h 1 >
      <button
        type="button"
        onClick={() => setNumber("0")}
      >0</button>
    </>
  )
}

- useEffect - provede tzv. side effect (=data fetching, DOM updating, timers

import React, { useState, useEffect } from 'react';

function UserList() {
const [users, setUsers] = useState([]);

useEffect(() => {
// Fetch runs only once due to empty dependency array
fetch('https://random-data-api.com/api/v2/users?size=5')
.then(res => res.json())
.then(data => setUsers(data))
.catch(err => console.error('Error fetching users:', err));
}, []);

return (
<div>
<h 2>Random Users</h 2>
<ul>
{users.map(user => (
<li key={user.id}>{user.first_name} {user.last_name}</li>
))}
</ul>
</div>
 );
}
```

export default UserList;

- useRef - get funkce, doslova referencuje, !nedělá re-render -> tracking the previous render or storing a value that doesnt cause a re-render

- useReducer - něco jako useState, ale když máš víc dat, které potřebuješ změnit

### Extra notes*for me*
- useeffect budeme potřebovat na update dat v eventviewu
- 


## Geocoding
> -  Leaflet k samotnému vyhledání geokódu __nepotřebujeme__
> -  geokódové API mapy.cz je založené na __HTTP requestu__ poslané zkrz URL s navolenými vlastnostmi:
> - REST API map pak vrací soubor dat v JSON formátu, který se dá převést na JS objekt nebo vlákno s možností naporcovat na kratší datové jednotky

```
async function geocode(query) {
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
  ```
  > ### následující kód propojuje geokód s frontendem (zobrazuje reálnou lokaci na mapě pomocí _MapLibre GL_)
  ```
    const source = map.getSource('markers');
    
    if (source) {
    	source.setData({
        type: 'FeatureCollection',
        features: json.items.map(item => ({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [item.position.lon, item.position.lat],
					},
					properties: {
						name: item.name,
            label: item.label,
            location: item.location,
						longitude: item.position.lon,
						latitude: item.position.lat,
					},
				})),
      });
    }
    
    // finally we set the map to show the whole geometry in the viewport
    map.jumpTo(
    	map.cameraForBounds(
      	bbox(json.items.map(item => ([item.position.lon, item.position.lat]))),
        {
          padding: 40,
        }
      )
    );
  } catch (ex) {
  	console.log(ex);
  }
}

const form = document.querySelector('#geocode-form');
const input = document.querySelector('#geocode-input');

form.addEventListener('submit', function(event) {
	event.preventDefault();
  geocode(input.value);
}, false);

map.on('load', function () {
	map.loadImage(
		'https://api.mapy.cz/img/api/marker/drop-red.png',
		function (error, image) {
			if (error) throw error;
			map.addImage('marker-icon', image);
    }
  );
});
```


