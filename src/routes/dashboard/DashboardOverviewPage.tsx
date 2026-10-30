import type { ComponentType, SVGProps } from 'react'
import { Link, useOutletContext } from 'react-router'
import {
    ExclamationTriangleIcon,
    ShieldExclamationIcon,
    CheckCircleIcon,
    SignalIcon,
} from '@heroicons/react/24/outline'
import type { DashboardContext } from './types'

const recentReports = [
    { id: '1', user: 'BadActor#1234', reason: 'Spam massif', status: 'pending', date: '01/05/2026' },
    { id: '2', user: 'Troll#9999', reason: 'Harcèlement', status: 'accepted', date: '30/04/2026' },
    { id: '3', user: 'Scammer#5678', reason: 'Arnaque Discord Nitro', status: 'accepted', date: '29/04/2026' },
    { id: '4', user: 'Raider#3333', reason: 'Raid de serveur', status: 'rejected', date: '28/04/2026' },
    { id: '5', user: 'Spammer#7777', reason: 'Publicité non sollicitée', status: 'pending', date: '27/04/2026' },
]

const statusConfig = {
    pending: { label: 'En attente', className: 'text-warning bg-warning/15' },
    accepted: { label: 'Accepté', className: 'text-success bg-success/15' },
    rejected: { label: 'Refusé', className: 'text-accent bg-accent/15' },
}

export function DashboardOverviewPage() {
    const { selectedServer } = useOutletContext<DashboardContext>()

    return (
        <>
            <div className="mb-8">
                <h1 className="font-century text-[2rem] font-bold text-base-content">Vue d'ensemble</h1>
                <p className="voicey-muted font-century text-sm mt-1">{selectedServer.name}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                <StatCard
                    Icon={ExclamationTriangleIcon}
                    label="Reports en attente"
                    value="12"
                    colorClass="text-warning"
                    bgClass="bg-warning/10"
                />
                <StatCard
                    Icon={CheckCircleIcon}
                    label="Reports acceptés"
                    value="348"
                    colorClass="text-success"
                    bgClass="bg-success/10"
                />
                <StatCard
                    Icon={ShieldExclamationIcon}
                    label="Blacklistés"
                    value="892"
                    colorClass="text-accent"
                    bgClass="bg-accent/10"
                />
                <StatCard
                    Icon={SignalIcon}
                    label="Mode actuel"
                    value="Actif"
                    colorClass="text-secondary"
                    bgClass="bg-secondary/10"
                />
            </div>

            {/* Recent reports */}
            <div className="bg-base-200 rounded-[18px] border border-base-content/15 overflow-hidden">
                <div className="px-6 py-4 border-b border-base-content/15 flex items-center justify-between">
                    <h2 className="font-century font-bold text-[18px]">Reports récents</h2>
                    <Link to="/dashboard/reports" className="font-century text-[13px] text-secondary hover:underline">
                        Voir tout →
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-base-content/10">
                                <th className="px-6 py-3 text-left font-century text-[12px] voicey-muted uppercase tracking-wider">Utilisateur</th>
                                <th className="px-6 py-3 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden md:table-cell">Raison</th>
                                <th className="px-6 py-3 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden lg:table-cell">Date</th>
                                <th className="px-6 py-3 text-left font-century text-[12px] voicey-muted uppercase tracking-wider">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentReports.map((report) => {
                                const cfg = statusConfig[report.status as keyof typeof statusConfig]
                                return (
                                    <tr key={report.id} className="border-b border-base-content/10 last:border-0 hover:bg-base-content/5 transition-colors">
                                        <td className="px-6 py-3 font-century text-[14px] font-bold">{report.user}</td>
                                        <td className="px-6 py-3 font-century text-[14px] voicey-muted hidden md:table-cell">{report.reason}</td>
                                        <td className="px-6 py-3 font-century text-[13px] voicey-muted hidden lg:table-cell">{report.date}</td>
                                        <td className="px-6 py-3">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-century text-[12px] font-bold ${cfg.className}`}>
                                                {cfg.label}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type StatCardProps = {
    Icon: ComponentType<SVGProps<SVGSVGElement>>
    label: string
    value: string
    colorClass: string
    bgClass: string
}

function StatCard({ Icon, label, value, colorClass, bgClass }: StatCardProps) {
    return (
        <div className="bg-base-200 rounded-[18px] border border-base-content/15 px-5 py-5">
            <div className={`w-10 h-10 rounded-[10px] ${bgClass} flex items-center justify-center mb-3`}>
                <Icon className={`size-5 ${colorClass}`} />
            </div>
            <p className="voicey-muted font-century text-[12px] mb-1">{label}</p>
            <p className={`font-century text-[28px] font-bold ${colorClass}`}>{value}</p>
        </div>
    )
}
