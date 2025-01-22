const increaseScrore = (setScore: React.Dispatch<React.SetStateAction<number>> , setLevel: React.Dispatch<React.SetStateAction<number>>) => {
    setScore(state => state + 5)
    setLevel(state => state + 1)
}

export default increaseScrore