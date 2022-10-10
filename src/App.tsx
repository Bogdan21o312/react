import React from 'react';
import {useInput} from "./hooks/useInput";

const App = () => {
    const userName = useInput('')
    const password = useInput('')

    return (
        <div>
          <input {...userName} type="text" placeholder="Username"/>
          <input {...password} type="text" placeholder="password"/>
            <button onClick={() => console.log(userName.value, password.value)}>Click</button>
        </div>
    );
};

export default App;