import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Breeding from './components/breeding/Breeding';
import Contacts from './components/contacts/Contacts';
import EditHorseGame from './components/edit-horse-game/EditHorseGame';
import Events from './components/events/Events';
import Gallery from './components/gallery/Gallery';
import HorseGameCreate from './components/horse-game-create/HorseGameCreate';
import Sale from './components/sale/Sale';
import Details from './components/details/Details';
import HorseGameCatalog from './components/horse-game-catalog/HorseGameCatalog';
import Footer from './components/footer/Footer';
import { AuthContext } from './contexts/AuthContext';



function App(){
    const [authState, setAuthState] = useState({})

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,

    }

    return (
        <AuthContext.Provider value={contextData}>
        <div id="box">
            <Header />
            <main id="main-content"> 
                <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/breeding' element={<Breeding />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/details' element={<Details />}/>
            <Route path='/edit-game' element={<EditHorseGame />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/catalog' element={<HorseGameCatalog />}/>
            <Route path='/catalog/:gameId/details' element={<Details />}/>
            <Route path='/create-game' element={<HorseGameCreate/>}/>
            <Route path='/sale' element={<Sale/>}/>
            
            
            
                </Routes>   

            </main>
            <Footer />

        </div>
        </AuthContext.Provider>
    )
}

export default App