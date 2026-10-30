import { useState } from 'react'
import { CheckIcon, XMarkIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useOutletContext } from 'react-router'
import type { DashboardContext, Report, ReportStatus } from './types'

const allReports: Report[] = [
    { id: '1', user: 'BadActor#1234', userId: '123456789', reason: 'Spam massif dans plusieurs serveurs', status: 'pending', date: '01/05/2026', submittedBy: 'Admin#0001' },
    { id: '2', user: 'Troll#9999', userId: '987654321', reason: 'Harcèlement répété envers des membres', status: 'accepted', date: '30/04/2026', submittedBy: 'Modo#0002' },
    { id: '3', user: 'Scammer#5678', userId: '555555555', reason: 'Arnaque Discord Nitro', status: 'accepted', date: '29/04/2026', submittedBy: 'Admin#0001' },
    { id: '4', user: 'Raider#3333', userId: '333333333', reason: 'Raid de serveur organisé', status: 'rejected', date: '28/04/2026', submittedBy: 'User#1234' },
    { id: '5', user: 'Spammer#7777', userId: '777777777', reason: 'Publicité non sollicitée répétée', status: 'pending', date: '27/04/2026', submittedBy: 'Modo#0003' },
    { id: '6', user: 'Toxique#2222', userId: '222222222', reason: 'Comportement toxique systématique', status: 'pending', date: '26/04/2026', submittedBy: 'Admin#0001' },
    { id: '7', user: 'FakeBot#8888', userId: '888888888', reason: 'Compte bot non déclaré utilisé pour du spam', status: 'accepted', date: '25/04/2026', submittedBy: 'Modo#0002' },
    { id: '8', user: 'Impostor#4444', userId: '444444444', reason: "Usurpation d'identité d'un modérateur", status: 'rejected', date: '24/04/2026', submittedBy: 'User#5678' },
]

type FilterValue = 'all' | ReportStatus

const filterTabs: { label: string; value: FilterValue }[] = [
    { label: 'Tous', value: 'all' },
    { label: 'En attente', value: 'pending' },
    { label: 'Acceptés', value: 'accepted' },
    { label: 'Refusés', value: 'rejected' },
]

const statusConfig: Record<ReportStatus, { label: string; className: string }> = {
    pending: { label: 'En attente', className: 'text-warning bg-warning/15' },
    accepted: { label: 'Accepté', className: 'text-success bg-success/15' },
    rejected: { label: 'Refusé', className: 'text-accent bg-accent/15' },
}

export function DashboardReportsPage() {
    const { selectedServer } = useOutletContext<DashboardContext>()
    const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
    const [reports, setReports] = useState<Report[]>(allReports)

    const filtered = reports.filter(r => activeFilter === 'all' || r.status === activeFilter)

    const counts: Record<FilterValue, number> = {
        all: reports.length,
        pending: reports.filter(r => r.status === 'pending').length,
        accepted: reports.filter(r => r.status === 'accepted').length,
        rejected: reports.filter(r => r.status === 'rejected').length,
    }

    const updateStatus = (id: string, status: ReportStatus) => {
        setReports(prev => prev.map(r => r.id === id ? { ...r, status } : r))
    }

    return (
        <>
            <div className="mb-8">
                <h1 className="font-century text-[2rem] font-bold text-base-content">Reports</h1>
                <p className="voicey-muted font-century text-sm mt-1">{selectedServer.name}</p>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
                {filterTabs.map(tab => (
                    <button
                        key={tab.value}
                        type="button"
                        onClick={() => setActiveFilter(tab.value)}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 font-century text-[13px] font-bold border transition-colors ${
                            activeFilter === tab.value
                                ? 'bg-base-content text-primary-content border-base-content'
                                : 'border-base-content/25 text-base-content/70 hover:border-base-content/50 hover:text-base-content'
                        }`}
                    >
                        {tab.label}
                        <span className={`rounded-full px-1.5 text-[11px] ${
                            activeFilter === tab.value ? 'bg-black/20' : 'bg-base-content/15'
                        }`}>
                            {counts[tab.value]}
                        </span>
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-base-200 rounded-[18px] border border-base-content/15 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-base-content/15">
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider">Utilisateur</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden md:table-cell">Raison</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden lg:table-cell">Soumis par</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden xl:table-cell">Date</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider">Statut</th>
                                <th className="px-6 py-4 text-right font-century text-[12px] voicey-muted uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center voicey-muted font-century">
                                        Aucun report dans cette catégorie
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((report) => {
                                    const cfg = statusConfig[report.status]
                                    return (
                                        <tr key={report.id} className="border-b border-base-content/10 last:border-0 hover:bg-base-content/5 transition-colors">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-century text-[14px] font-bold">{report.user}</p>
                                                    <p className="voicey-muted font-century text-[11px]">ID : {report.userId}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 hidden md:table-cell max-w-[200px]">
                                                <p className="font-century text-[13px] voicey-muted truncate">{report.reason}</p>
                                            </td>
                                            <td className="px-6 py-4 font-century text-[13px] voicey-muted hidden lg:table-cell">
                                                {report.submittedBy}
                                            </td>
                                            <td className="px-6 py-4 font-century text-[13px] voicey-muted hidden xl:table-cell">
                                                {report.date}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-century text-[12px] font-bold ${cfg.className}`}>
                                                    {cfg.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1.5 justify-end">
                                                    <button
                                                        type="button"
                                                        title="Voir les preuves"
                                                        className="p-1.5 rounded-[8px] border border-base-content/20 hover:border-base-content/50 hover:bg-base-content/10 transition-colors"
                                                    >
                                                        <EyeIcon className="size-4 text-base-content/70" />
                                                    </button>
                                                    {report.status !== 'accepted' && (
                                                        <button
                                                            type="button"
                                                            title="Accepter"
                                                            onClick={() => updateStatus(report.id, 'accepted')}
                                                            className="p-1.5 rounded-[8px] border border-success/30 hover:border-success/60 hover:bg-success/10 transition-colors"
                                                        >
                                                            <CheckIcon className="size-4 text-success" />
                                                        </button>
                                                    )}
                                                    {report.status !== 'rejected' && (
                                                        <button
                                                            type="button"
                                                            title="Refuser"
                                                            onClick={() => updateStatus(report.id, 'rejected')}
                                                            className="p-1.5 rounded-[8px] border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-colors"
                                                        >
                                                            <XMarkIcon className="size-4 text-accent" />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-base-content/15">
                    <p className="voicey-muted font-century text-[13px]">
                        {filtered.length} report{filtered.length > 1 ? 's' : ''}
                    </p>
                </div>
            </div>
        </>
    )
}
