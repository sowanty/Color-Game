const changeColorBlock = (setSolor: React.Dispatch<React.SetStateAction<string>>) => {

    const number1 = Math.ceil(Math.random()*255)
    const number2 = Math.ceil(Math.random()*255)
    const number3 = Math.ceil(Math.random()*255)

    setSolor(`rgb(${number1},${number2},${number3})`)

}

export default changeColorBlock