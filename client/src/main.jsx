import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import AdoptPage from './pages/AdoptPage.jsx'
import FosterPage from './pages/FosterPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/adoption-page' element={<AdoptPage />} />
      <Route path='/foster-page' element={<FosterPage />} />
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
