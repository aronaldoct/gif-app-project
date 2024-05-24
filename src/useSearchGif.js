import { useState } from "react";

export const useSearchGif = () => {
    
    const [valorInput, setBuscar] = useState('');
    const [gifs, setGifs] = useState([]);
    const [cargando, setCargando] = useState(false);
  
    const busqueda = (dato)=>{
      const valor = dato.target.value;
      setBuscar(valor);
    }
  
    const getGifts = async (query)=>{
      const url = `https://api.giphy.com/v1/gifs/search?api_key=Nf6pYrGk75CrD6dCVvIeVyasiwEn1mOQ&q=${query}`;
      setCargando(true)
      const response = await fetch(url);
      const data = await response.json();
      setCargando(false)
  
      return data.data
    }
  
    const traer = async (datos)=>{
      datos.preventDefault()
      const gifts = await getGifts(valorInput)
      setGifs(gifts)
    }
    
    return{
        traer,
        valorInput,
        busqueda,
        gifs,
        cargando,
    }

}