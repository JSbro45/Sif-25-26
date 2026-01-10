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

- useEffect - provede tzv. side effect (=data fetching, DOM updating, timers)

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return < h 1 >I've rendered {count} times!< / h 1 >;
}

- useRef - get funkce, doslova referencuje

- useReducer - něco jako useState, ale když máš víc dat, které potřebuješ změnit

<h2>Extra notes</h2>*for me*
- useeffect budeme potřebovat na update dat v eventviewu
- 