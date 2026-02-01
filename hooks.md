<h1>Hooks</h1>
> ulehčují změnu dat v aplikaci

- useState - když se data změní, umožňuje rerender, základní hook

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

export default UserList;

- useRef - get funkce, doslova referencuje, !nedělá re-render -> tracking the previous render or storing a value that doesnt cause a re-render

- useReducer - něco jako useState, ale když máš víc dat, které potřebuješ změnit

<h2>Extra notes</h2>*for me*
- useeffect budeme potřebovat na update dat v eventviewu
- 