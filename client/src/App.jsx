import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

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
import Logout from './components/logout/Logout';
import PrivateGuard from './components/guard/PrivateGuard';
import Profile from './components/profile/Profile';




function App(){
  

    return (
        <AuthContextProvider>
        <div id="box">
            <Header />
            <main id="main-content"> 
                <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/details' element={<Details />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/catalog' element={<HorseGameCatalog />}/>
            <Route path='/catalog/:gameId/details' element={<Details />}/>
            <Route element= {<PrivateGuard/>}>
                <Route path='/create-game/' element={<HorseGameCreate/>} />
                <Route path='/games/:gameId/edit-horse' element={<EditHorseGame />}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/sale' element={<Sale/>}/>
                <Route path='/breeding' element={<Breeding />}/>
                <Route path='/profile' element={<Profile/>}/>

            </Route>
            {/* <Route path='/create-game' element={<AuthGuard><HorseGameCreate/></AuthGuard>}/> */}
            
                </Routes>   

            </main>
            <Footer />

        </div>
        </AuthContextProvider>
    )
}

export default App