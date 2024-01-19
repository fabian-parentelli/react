import { useState } from "react";
import useFetch from "../../components/hooks/useFetch";

const PokeApi = () => {
    const [id, setId] = useState(1);

    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id]);

    const handleSiguiente = () => { setId(id + 1) };
    const handleAnterior = () => { if (id > 1) setId(id - 1) };

    return (
        <div>
            <h2>PokeApi</h2>
            <hr />
            {data &&
                <div>
                    <h3>{data.name}</h3>
                    <img src={data.sprites.front_default} alt={data.name} />
                </div>
            }
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </div>
    );
};

export default PokeApi;