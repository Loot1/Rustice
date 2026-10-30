import { useState } from 'react'
import { MagnifyingGlassIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useOutletContext } from 'react-router'
import type { BlacklistedUser, DashboardContext } from './types'

const allBlacklisted: BlacklistedUser[] = [
    { id: '1', user: 'Troll#9999', userId: '987654321', reason: 'Harcèlement répété envers des membres', blacklistedAt: '30/04/2026', blacklistedBy: 'Modo#0002', proofCount: 3 },
    { id: '2', user: 'Scammer#5678', userId: '555555555', reason: 'Arnaque Discord Nitro', blacklistedAt: '29/04/2026', blacklistedBy: 'Admin#0001', proofCount: 5 },
    { id: '3', user: 'FakeBot#8888', userId: '888888888', reason: 'Compte bot non déclaré utilisé pour du spam', blacklistedAt: '25/04/2026', blacklistedBy: 'Modo#0002', proofCount: 2 },
    { id: '4', user: 'Phisher#1111', userId: '111111111', reason: 'Phishing et vol de comptes', blacklistedAt: '20/04/2026', blacklistedBy: 'Admin#0001', proofCount: 7 },
    { id: '5', user: 'Abuser#6666', userId: '666666666', reason: 'Abus de pouvoir sur plusieurs serveurs', blacklistedAt: '15/04/2026', blacklistedBy: 'Admin#0001', proofCount: 4 },
    { id: '6', user: 'Menace#0000', userId: '000000001', reason: 'Menaces graves envers des membres', blacklistedAt: '10/04/2026', blacklistedBy: 'Modo#0003', proofCount: 6 },
]

export function DashboardBlacklistPage() {
    const { selectedServer } = useOutletContext<DashboardContext>()
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState<BlacklistedUser[]>(allBlacklisted)

    const filtered = users.filter(u =>
        u.user.toLowerCase().includes(search.toLowerCase()) ||
        u.userId.includes(search) ||
        u.reason.toLowerCase().includes(search.toLowerCase())
    )

    const removeUser = (id: string) => {
        setUsers(prev => prev.filter(u => u.id !== id))
    }

    return (
        <>
            <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                    <h1 className="font-century text-[2rem] font-bold text-base-content">Blacklist</h1>
                    <p className="voicey-muted font-century text-sm mt-1">{selectedServer.name}</p>
                </div>
                <div className="flex items-center gap-2 voicey-muted font-century text-[13px] bg-base-200 rounded-[12px] border border-base-content/15 px-4 py-2">
                    <span className="text-base-content font-bold text-[20px]">{users.length}</span>
                    <span>utilisateurs blacklistés</span>
                </div>
            </div>

            {/* Search */}
            <div className="join flex h-[52px] items-center overflow-hidden rounded-[14px] border-[2px] border-base-content/30 bg-transparent focus-within:border-base-content/60 transition-colors mb-6 max-w-md">
                <input
                    className="input join-item input-ghost h-full flex-1 rounded-none border-0 bg-transparent px-5 font-century text-[14px] text-base-content shadow-none outline-none placeholder:text-base-content/40 focus:outline-none"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Rechercher par pseudo, ID ou raison…"
                />
                <div className="pr-4">
                    <MagnifyingGlassIcon className="size-5 text-base-content/50" />
                </div>
            </div>

            {/* Table */}
            <div className="bg-base-200 rounded-[18px] border border-base-content/15 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-base-content/15">
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider">Utilisateur</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden md:table-cell">Raison</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden lg:table-cell">Blacklisté par</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden xl:table-cell">Date</th>
                                <th className="px-6 py-4 text-left font-century text-[12px] voicey-muted uppercase tracking-wider hidden sm:table-cell">Preuves</th>
                                <th className="px-6 py-4 text-right font-century text-[12px] voicey-muted uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center voicey-muted font-century">
                                        Aucun utilisateur trouvé
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((entry) => (
                                    <tr key={entry.id} className="border-b border-base-content/10 last:border-0 hover:bg-base-content/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                                                    {entry.user[0].toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-century text-[14px] font-bold">{entry.user}</p>
                                                    <p className="voicey-muted font-century text-[11px]">ID : {entry.userId}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell max-w-[200px]">
                                            <p className="font-century text-[13px] voicey-muted truncate">{entry.reason}</p>
                                        </td>
                                        <td className="px-6 py-4 font-century text-[13px] voicey-muted hidden lg:table-cell">
                                            {entry.blacklistedBy}
                                        </td>
                                        <td className="px-6 py-4 font-century text-[13px] voicey-muted hidden xl:table-cell">
                                            {entry.blacklistedAt}
                                        </td>
                                        <td className="px-6 py-4 hidden sm:table-cell">
                                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-century text-[12px] font-bold text-secondary bg-secondary/15">
                                                {entry.proofCount} preuve{entry.proofCount > 1 ? 's' : ''}
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
                                                <button
                                                    type="button"
                                                    title="Retirer de la blacklist"
                                                    onClick={() => removeUser(entry.id)}
                                                    className="p-1.5 rounded-[8px] border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-colors"
                                                >
                                                    <TrashIcon className="size-4 text-accent" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-base-content/15">
                    <p className="voicey-muted font-century text-[13px]">
                        {filtered.length} utilisateur{filtered.length > 1 ? 's' : ''}
                        {search && ` correspondant à "${search}"`}
                    </p>
                </div>
            </div>
        </>
    )
}
