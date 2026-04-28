import { Routes, Route } from 'react-router'
import { AboutPage, HomePage, LegalNoticePage, NoMatchPage, PrivacyPolicyPage, RequestPage } from './routes'
import { Layout } from './components'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/requests" element={<RequestPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/legal-notice" element={<LegalNoticePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        <Route path="*" element={<NoMatchPage/>}/>
      </Routes>
    </Layout>
  )
}