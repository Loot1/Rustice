import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useOutletContext } from 'react-router'
import type { DashboardContext } from './types'

type BotMode = 'active' | 'passive'

export function DashboardSettingsPage() {
    const { selectedServer } = useOutletContext<DashboardContext>()
    const [mode, setMode] = useState<BotMode>('active')
    const [notifChannel, setNotifChannel] = useState('#modération')
    const [autoRole, setAutoRole] = useState('')
    const [saved, setSaved] = useState(false)

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
    }

    return (
        <>
            <div className="mb-8">
                <h1 className="font-century text-[2rem] font-bold text-base-content">Paramètres</h1>
                <p className="voicey-muted font-century text-sm mt-1">{selectedServer.name}</p>
            </div>

            <div className="max-w-2xl flex flex-col gap-6">

                {/* Mode de protection */}
                <div className="bg-base-200 rounded-[18px] border border-base-content/15 p-6">
                    <h2 className="font-century font-bold text-[18px] mb-1">Mode de protection</h2>
                    <p className="voicey-muted font-century text-[13px] mb-5">
                        Choisissez comment Justice agit lorsqu'un utilisateur blacklisté tente de rejoindre votre serveur.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <ModeCard
                            title="Mode actif"
                            description="Justice kick ou bannit automatiquement les utilisateurs blacklistés qui rejoignent votre serveur."
                            selected={mode === 'active'}
                            onClick={() => setMode('active')}
                        />
                        <ModeCard
                            title="Mode passif"
                            description="Justice informe vos modérateurs via un salon dédié lorsqu'un utilisateur blacklisté rejoint le serveur."
                            selected={mode === 'passive'}
                            onClick={() => setMode('passive')}
                        />
                    </div>
                </div>

                {/* Salon de notification */}
                <div className="bg-base-200 rounded-[18px] border border-base-content/15 p-6">
                    <h2 className="font-century font-bold text-[18px] mb-1">Salon de notification</h2>
                    <p className="voicey-muted font-century text-[13px] mb-5">
                        Salon dans lequel Justice envoie les alertes. Utilisé en mode passif, et pour les logs en mode actif.
                    </p>
                    <div className="join flex h-[52px] items-center overflow-hidden rounded-[14px] border-[2px] border-base-content/30 bg-transparent focus-within:border-base-content/60 transition-colors">
                        <input
                            className="input join-item input-ghost h-full flex-1 rounded-none border-0 bg-transparent px-5 font-century text-[15px] text-base-content shadow-none outline-none placeholder:text-base-content/40 focus:outline-none"
                            value={notifChannel}
                            onChange={e => setNotifChannel(e.target.value)}
                            placeholder="#nom-du-salon"
                        />
                    </div>
                </div>

                {/* Rôle autorisé */}
                <div className="bg-base-200 rounded-[18px] border border-base-content/15 p-6">
                    <h2 className="font-century font-bold text-[18px] mb-1">Rôle autorisé à soumettre des reports</h2>
                    <p className="voicey-muted font-century text-[13px] mb-5">
                        Seuls les membres possédant ce rôle pourront soumettre des reports via Justice. Laissez vide pour autoriser tout le monde.
                    </p>
                    <div className="join flex h-[52px] items-center overflow-hidden rounded-[14px] border-[2px] border-base-content/30 bg-transparent focus-within:border-base-content/60 transition-colors">
                        <input
                            className="input join-item input-ghost h-full flex-1 rounded-none border-0 bg-transparent px-5 font-century text-[15px] text-base-content shadow-none outline-none placeholder:text-base-content/40 focus:outline-none"
                            value={autoRole}
                            onChange={e => setAutoRole(e.target.value)}
                            placeholder="@Modérateur"
                        />
                    </div>
                </div>

                {/* Zone de danger */}
                <div className="bg-base-200 rounded-[18px] border border-accent/25 p-6">
                    <h2 className="font-century font-bold text-[18px] mb-1 text-accent">Zone de danger</h2>
                    <p className="voicey-muted font-century text-[13px] mb-5">
                        Ces actions sont irréversibles. Réfléchissez avant de procéder.
                    </p>
                    <button
                        type="button"
                        className="btn btn-outline rounded-full border-[2px] border-accent/50 bg-transparent px-6 py-2 font-century text-[14px] font-bold text-accent shadow-none hover:bg-accent/10 hover:border-accent transition-colors h-auto min-h-0"
                    >
                        Retirer Justice du serveur
                    </button>
                </div>

                {/* Sauvegarder */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="btn btn-outline rounded-full border-[2.5px] border-base-content bg-transparent px-8 py-2 font-century text-[15px] font-bold text-base-content shadow-none hover:bg-base-content/10 hover:text-base-content hover:border-base-content transition-colors h-auto min-h-0"
                    >
                        Sauvegarder
                    </button>
                    {saved && (
                        <div className="flex items-center gap-2 text-success font-century text-[14px]">
                            <CheckIcon className="size-4" />
                            Modifications sauvegardées
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

type ModeCardProps = {
    title: string
    description: string
    selected: boolean
    onClick: () => void
}

function ModeCard({ title, description, selected, onClick }: ModeCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex-1 text-left rounded-[14px] border-[2px] p-4 transition-all cursor-pointer ${
                selected
                    ? 'border-base-content bg-base-content/10'
                    : 'border-base-content/25 hover:border-base-content/50'
            }`}
        >
            <div className="flex items-start gap-3">
                <div className={`mt-0.5 w-4 h-4 rounded-full border-[2px] shrink-0 flex items-center justify-center ${
                    selected ? 'border-base-content' : 'border-base-content/40'
                }`}>
                    {selected && <div className="w-2 h-2 rounded-full bg-base-content" />}
                </div>
                <div>
                    <p className="font-century font-bold text-[14px] mb-1">{title}</p>
                    <p className="voicey-muted font-century text-[12px] leading-relaxed">{description}</p>
                </div>
            </div>
        </button>
    )
}
