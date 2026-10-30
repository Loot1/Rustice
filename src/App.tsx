import { Routes, Route, Outlet } from 'react-router'
import { AboutPage, HomePage, LegalNoticePage, NoMatchPage, PrivacyPolicyPage, RequestPage } from './routes'
import { DashboardOverviewPage, DashboardReportsPage, DashboardSettingsPage, DashboardBlacklistPage } from './routes/dashboard'
import { Layout, DashboardLayout } from './components'

export function App() {
  return (
    <Routes>
      {/* Routes publiques avec le Layout principal */}
      <Route element={<Layout><Outlet /></Layout>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/requests" element={<RequestPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/legal-notice" element={<LegalNoticePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>

      {/* Routes dashboard avec le DashboardLayout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardOverviewPage />} />
        <Route path="reports" element={<DashboardReportsPage />} />
        <Route path="blacklist" element={<DashboardBlacklistPage />} />
        <Route path="settings" element={<DashboardSettingsPage />} />
      </Route>
    </Routes>
  )
}