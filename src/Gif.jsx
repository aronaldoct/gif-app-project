import {delay, motion, useInView} from 'framer-motion'
import { useRef } from 'react'

const variants = {
    initial: { 
        opacity: 0, scale: 0
    },
    animate: ({index}) => ({
        opacity: 1, 
        scale: 1, 
        transition: {
            delay: index*.1
        }
    })
}

export const Gif = ({ gif, index }) => {

    const ref = useRef(null)
    const Visto = useInView(ref, {
        once: true
    })

    return (
        <motion.img
            ref={ref} 
            initial = "initial"
            animate = {Visto ? "animate" : ""}
            variants={variants}
            custom={{ index }}
            className="gifs" 
            src={gif.images.original.url} 
            alt="" 
        />
    )
}