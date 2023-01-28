// create your App component here
import React, {useState, useEffect} from 'react';

function App() {

    let [dogImage, setImage] = useState('')
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => {
            setImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (isLoaded === false) {
        return (
            <p>Loading...</p>
        )
    } 

    return (
        <div>
            <img
            src={dogImage}
            alt='A Random Dog'
            ></img>
        </div>
    )
}

export default App;