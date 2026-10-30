export type DiscordServer = {
    id: string
    name: string
    memberCount: number
}

export type DashboardContext = {
    selectedServer: DiscordServer
}

export type ReportStatus = 'pending' | 'accepted' | 'rejected'

export type Report = {
    id: string
    user: string
    userId: string
    reason: string
    status: ReportStatus
    date: string
    submittedBy: string
}

export type BlacklistedUser = {
    id: string
    user: string
    userId: string
    reason: string
    blacklistedAt: string
    blacklistedBy: string
    proofCount: number
}
