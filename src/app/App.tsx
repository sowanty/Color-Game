import { useEffect, useState } from "react"
import { IBlock } from "../core/interfaces"
import changeBrightnessBlock from "../core/utility/changeBrightnessBlock"
import changeColorBlock from "../core/utility/changeColorBlock"
import increaseScrore from "../core/utility/increaseScrore"
import decreaseScore from "../core/utility/decreaseScore"

const App = () => {

    const [color, setSolor] = useState("")
    const [score, setScore] = useState(0)
    const [level, setLevel] = useState(0)
    const [brightnessNumber, setBrightnessNumber] = useState(40)
    const [block, setBlock] = useState<IBlock[]>([
        { id : 0 , isBrightness : false },
        { id : 1 , isBrightness : false },
        { id : 2 , isBrightness : false },
        { id : 3 , isBrightness : false },
        { id : 4 , isBrightness : false },
        { id : 5 , isBrightness : false },
        { id : 6 , isBrightness : false },
        { id : 7 , isBrightness : false },
        { id : 8 , isBrightness : false },
    ])

    const blockStyle = {
        backgroundColor : color ,
        filter : `brightness(${brightnessNumber}%)`
    }

    const clickBlock = () => {
        changeBrightnessBlock(setBlock)
        changeColorBlock(setSolor)
        increaseScrore(setScore,setLevel)
    }

    useEffect(() => {
        changeBrightnessBlock(setBlock)
        changeColorBlock(setSolor)
    }, [])

    useEffect(() => {

        if(score < 100) {
            setBrightnessNumber(state => state + 2.5)
        }
        else {
            setBlock([])
            setTimeout(() => {
                setBrightnessNumber(state => state + 2.5)
                alert("برنده شدی")
                location.reload()
            }, 500);
        }
        
    } , [level])


    return (
        <>
            <div className="w-[500px] h-[450px] grid grid-cols-3 gap-2">
                {
                    block.map((element,index) => {                         
                        return (
                            <div key={index} className={`rounded-md cursor-pointer`} style={element.isBrightness ? blockStyle : { backgroundColor : color }} onClick={() => element.isBrightness ? clickBlock() : decreaseScore(score,setScore,setBrightnessNumber)}></div>
                        )
                    })
                }
            </div>
            <div className="h-16 my-2 flex justify-center items-center text-white">Score : { score } </div>
        </>
    )

}

export default App