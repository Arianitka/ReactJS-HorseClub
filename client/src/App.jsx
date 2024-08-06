import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
 
function App(){
    return (
        <div id="box">
            <Header />
            <main id="main-content"> 
                <Routes>
            <Route path='/' element={<Home />}/>
                </Routes>   

            </main>

        </div>
    )
}

export default App