export function NoMatchPage() {
    return (
        <section className="min-h-[calc(100vh-220px)] py-12 px-6 flex items-center justify-center bg-base-200">
            <div className="mx-auto w-full max-w-2xl card border border-base-content/10 bg-base-100/10 text-center shadow-none">
                <div className="card-body gap-4">
                    <h1 className="font-century text-4xl font-bold">Erreur 404</h1>
                    <p className="voicey-muted">La page demandée est introuvable.</p>
                </div>
            </div>
        </section>
    )
}