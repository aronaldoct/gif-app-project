import { Buscador } from "./Buscado";
import { GridGifts } from "./GridGifts";
import { useSearchGif } from "./useSearchGif";

function App() {
  //Estado
  const { traer, valorInput, busqueda, gifs, cargando} = useSearchGif()

  //JSX
  return (
    <>
      <Buscador
       traer={traer}
       valorInput={valorInput}
       busqueda={busqueda}
      />
      {
        cargando ? 
          (<h2 className="progreso">Cargando...</h2>)
        :
          (<GridGifts 
            gifs ={gifs}
            />)
      }
    </>
  )
}

export default App
