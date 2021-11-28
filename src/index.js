import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom' 

import reportWebVitals from './reportWebVitals.js'

import './index.css'

import Navbar from "./components/Navbar/index.js"

import HomePage from './routes/Home.js'
import InfoPage from './routes/Info.js'
import RequestPage from './routes/Request.js'
import AboutPage from './routes/About.js'
import LegalNoticePage from './routes/LegalNotice.js'
import PrivacyPolicyPage from './routes/PrivacyPolicy.js'
import NoMatchPage from './routes/NoMatch.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <div style={{
        marginLeft:"300px",
        padding:"1px 16px",
        backgroundColor:"#2B1E49",
        fontFamily:"CenturyGothic"
      }}>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/informations" element={<InfoPage/>}/>
          <Route path="/requetes" element={<RequestPage/>}/>
          <Route path="/a-propos" element={<AboutPage/>}/>
          <Route path="/mentions-legales" element={<LegalNoticePage/>}/>
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage/>}/>
          <Route path="*" element={<NoMatchPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()