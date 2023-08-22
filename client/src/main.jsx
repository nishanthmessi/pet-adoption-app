import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import store from './features/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'
import Home from './pages/Home.jsx'
import AdoptPage from './pages/AdoptPage.jsx'
import FosterPage from './pages/FosterPage.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import RegisterPet from './pages/RegisterPet.jsx'
import PetProfile from './pages/PetProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/adoption-page' element={<AdoptPage />} />
      <Route path='/foster-page' element={<FosterPage />} />
      <Route path='/pet-profile' element={<PetProfile />} />
      {/* Private Routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/register-pet' element={<RegisterPet />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
