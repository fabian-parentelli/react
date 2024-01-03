import { memo } from "react";  
// Esto sirve para memorisar un componente y que no se actualice cada vez que el madre se actualice.
// Solo para casos particulares.

const UnMemo = memo(() => {

    console.log('Soy el memo');

    return (
        <div>
            <h4>Soy un memo</h4>
        </div>
    );
}, 'xxx' ); // en donde estan las x puede ir una funcion para determinar cuando renderizar.

export default UnMemo;