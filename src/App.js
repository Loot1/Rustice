import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import HomePage from './routes/Home.js'
import RequestPage from './routes/Request.js'
import AboutPage from './routes/About.js'
import LegalNoticePage from './routes/LegalNotice.js'
import PrivacyPolicyPage from './routes/PrivacyPolicy.js'
import NoMatchPage from './routes/NoMatch.js'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/requetes" element={<RequestPage/>}/>
        <Route path="/a-propos" element={<AboutPage/>}/>
        <Route path="/mentions-legales" element={<LegalNoticePage/>}/>
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage/>}/>
        <Route path="*" element={<NoMatchPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}