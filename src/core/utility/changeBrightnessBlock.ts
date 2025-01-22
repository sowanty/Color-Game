import { IBlock } from "../interfaces"

const changeBrightnessBlock = (setBlock: React.Dispatch<React.SetStateAction<IBlock[]>>) => {

    const random = Math.floor(Math.random()*9)

    setBlock(state => {
        return state.map((element) => {
            return {...element , isBrightness : false}
        })
    })

    setBlock(state => {
        return state.map((element) => {
            if(element.id == random) return {...element , isBrightness : true}
            else return element
        })
    })

}

export default changeBrightnessBlock