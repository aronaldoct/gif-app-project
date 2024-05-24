import { Gif } from "./Gif"

export const GridGifts = ({gifs}) => {
    return (
        <div className="grid-gif">
            {
                gifs.map((gif,index) => (
                    <Gif key={gif.id} gif={gif} index={index} />
                ))
            }
        </div>
    )
}