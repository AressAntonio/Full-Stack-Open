
const Contac = ({contac, clearButton})=>{

    return(

        
         <li className='nc'>
           Nombre del contacto: {contac.nombre} || Numero telefonico: {contac.number}
           <button onClick={clearButton}>borrar</button>
         </li>
        
        
    )
};

export default Contac;