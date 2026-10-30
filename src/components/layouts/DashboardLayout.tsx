import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import {
    ChevronDownIcon,
    HomeIcon,
    ExclamationTriangleIcon,
    Cog6ToothIcon,
    ShieldExclamationIcon,
    Bars3Icon,
    XMarkIcon,
    ArrowLeftIcon,
} from '@heroicons/react/24/outline'
import logo from '../../assets/images/logo.png'
import type { DiscordServer, DashboardContext } from '../../routes/dashboard/types'

const mockServers: DiscordServer[] = [
    { id: '1', name: 'Mon Serveur Principal', memberCount: 1250 },
    { id: '2', name: 'Gaming Zone', memberCount: 430 },
    { id: '3', name: 'Communauté Justice', memberCount: 8900 },
]

const navItems = [
    { to: '/dashboard', label: "Vue d'ensemble", Icon: HomeIcon, end: true },
    { to: '/dashboard/reports', label: 'Reports', Icon: ExclamationTriangleIcon, end: false },
    { to: '/dashboard/blacklist', label: 'Blacklist', Icon: ShieldExclamationIcon, end: false },
    { to: '/dashboard/settings', label: 'Paramètres', Icon: Cog6ToothIcon, end: false },
]

export function DashboardLayout() {
    const [selectedServer, setSelectedServer] = useState<DiscordServer>(mockServers[0])
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const context: DashboardContext = { selectedServer }

    return (
        <div className="flex min-h-screen bg-base-100">

            {/* Overlay mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-base-200 border-r border-base-content/15 z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Logo */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-base-content/15">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="w-[36px] mr-3" alt="Logo Justice" />
                        <span className="border-y-[1.5px] border-base-content font-display text-[26px] leading-tight">
                            Justice
                        </span>
                    </NavLink>
                    <button
                        type="button"
                        className="lg:hidden p-1 rounded hover:bg-base-content/10 transition-colors"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        <XMarkIcon className="size-5 text-base-content" />
                    </button>
                </div>

                {/* Server selector */}
                <div className="px-4 py-4 border-b border-base-content/15">
                    <p className="voicey-muted font-century text-[11px] uppercase tracking-widest mb-2 px-1">
                        Serveur actif
                    </p>
                    <div className="dropdown w-full">
                        <div
                            tabIndex={0}
                            role="button"
                            className="flex items-center justify-between w-full rounded-[12px] border border-base-content/25 px-3 py-2.5 cursor-pointer hover:border-base-content/50 transition-colors bg-base-100/30"
                        >
                            <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-8 h-8 rounded-full bg-secondary/25 border border-secondary/40 flex items-center justify-center text-sm font-bold text-secondary shrink-0">
                                    {selectedServer.name[0].toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-century text-[13px] font-bold text-base-content truncate leading-tight">
                                        {selectedServer.name}
                                    </p>
                                    <p className="voicey-muted text-[11px]">
                                        {selectedServer.memberCount.toLocaleString('fr-FR')} membres
                                    </p>
                                </div>
                            </div>
                            <ChevronDownIcon className="size-4 text-base-content/50 shrink-0 ml-1" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content w-full rounded-[12px] border border-base-content/20 mt-2 p-1.5 shadow-2xl z-10"
                            style={{ backgroundColor: 'var(--color-base-200)' }}
                        >
                            {mockServers.map((server) => (
                                <li key={server.id}>
                                    <button
                                        type="button"
                                        className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2 w-full text-left transition-colors ${
                                            selectedServer.id === server.id
                                                ? 'bg-base-content/10'
                                                : 'hover:bg-base-content/10'
                                        }`}
                                        onClick={() => {
                                            setSelectedServer(server)
                                            const el = document.activeElement as HTMLElement
                                            el?.blur()
                                        }}
                                    >
                                        <div className="w-7 h-7 rounded-full bg-secondary/25 border border-secondary/40 flex items-center justify-center text-xs font-bold text-secondary shrink-0">
                                            {server.name[0].toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-century text-[13px] font-bold text-base-content">
                                                {server.name}
                                            </p>
                                            <p className="voicey-muted text-[11px]">
                                                {server.memberCount.toLocaleString('fr-FR')} membres
                                            </p>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 overflow-y-auto">
                    <ul className="flex flex-col gap-0.5">
                        {navItems.map(({ to, label, Icon, end }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    end={end}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 rounded-[12px] px-4 py-3 font-century text-[14px] transition-colors ${
                                            isActive
                                                ? 'bg-base-content/15 text-base-content font-bold'
                                                : 'text-base-content/60 hover:bg-base-content/10 hover:text-base-content'
                                        }`
                                    }
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <Icon className="size-5 shrink-0" />
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Back to site */}
                <div className="px-3 py-3 border-t border-base-content/15">
                    <NavLink
                        to="/"
                        className="flex items-center gap-3 rounded-[12px] px-4 py-3 font-century text-[13px] text-base-content/50 hover:bg-base-content/10 hover:text-base-content transition-colors"
                    >
                        <ArrowLeftIcon className="size-4 shrink-0" />
                        Retour au site
                    </NavLink>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Top bar */}
                <header className="sticky top-0 bg-base-100/95 backdrop-blur-sm border-b border-base-content/15 z-30 flex items-center px-5 py-3.5 gap-4">
                    <button
                        type="button"
                        className="lg:hidden p-1 rounded hover:bg-base-content/10 transition-colors"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Ouvrir le menu"
                    >
                        <Bars3Icon className="size-6 text-base-content" />
                    </button>

                    {/* Desktop breadcrumb */}
                    <div className="hidden lg:flex items-center gap-2">
                        <p className="voicey-muted font-century text-[13px]">Tableau de bord</p>
                        <span className="voicey-muted text-[13px]">—</span>
                        <p className="font-century text-[13px] text-base-content font-bold">
                            {selectedServer.name}
                        </p>
                    </div>

                    {/* Mobile: server name */}
                    <div className="lg:hidden flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-secondary/25 border border-secondary/30 flex items-center justify-center text-xs font-bold text-secondary">
                            {selectedServer.name[0]}
                        </div>
                        <p className="font-century text-[13px] font-bold truncate max-w-[140px]">
                            {selectedServer.name}
                        </p>
                    </div>

                    {/* User */}
                    <div className="ml-auto flex items-center gap-2.5 rounded-[12px] border border-base-content/20 px-3 py-1.5 cursor-pointer hover:border-base-content/40 transition-colors">
                        <div className="w-7 h-7 rounded-full bg-secondary/25 border border-secondary/30 flex items-center justify-center text-xs font-bold text-secondary">
                            U
                        </div>
                        <span className="font-century text-[13px] hidden sm:block">Utilisateur</span>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-5 lg:p-8 overflow-auto">
                    <Outlet context={context} />
                </main>
            </div>
        </div>
    )
}
