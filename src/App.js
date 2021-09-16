import React, {useEffect, useState} from 'react';

const App = () => {

    const [array, setArray] = useState([])

    useEffect( () => {
        // APIに接続
        // axios.get().then()

        // setArray()
    }, [])

    const display = () => {
        return <p>hogehoge</p>
    }

    return (
        <div>
            <h1>HelloWorld</h1>
            <p>{array}</p>
            {display}
        </div>
    )
}

export default App