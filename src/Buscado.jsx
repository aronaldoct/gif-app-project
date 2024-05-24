export const Buscador = ({traer, valorInput, busqueda}) => {
    return (
        <form className="form-buscador" onSubmit={traer}>
            <input className="buscador" value={valorInput} onChange={busqueda} />
        </form>
    )
}