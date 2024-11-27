import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ResourcesPage } from './pages/ResourcePage'
import UserPage from './pages/UserPage'
import RequestPage from './pages/RequestPage'
import Nav from './components/Nav'
import AddResource from './pages/AddResource'

function App() {
 

  return (
    <>
    <BrowserRouter basename='/Assignment'>
    <Nav />
    <Routes>
     <Route path="/" element={<ResourcesPage/>} >
     <Route path="user" element={<UserPage/>} />
     <Route path="request" element={<RequestPage/>} />
     </Route>
     <Route path="/add" element={<AddResource/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
