const decreaseScore = (score: number , setScore: React.Dispatch<React.SetStateAction<number>>,setBrightnessNumber: React.Dispatch<React.SetStateAction<number>>) => {
    if(score == 0) {
        alert("باختی")
        location.reload()
    }
    else {
        setBrightnessNumber(state => state + 2.5)
        setScore(state => state - 5)
    }
}
export default decreaseScore