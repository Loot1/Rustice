export function NoMatchPage() {
    return (
        <section className="content-page flex items-center justify-center bg-base-200">
            <div className="content-card card w-full max-w-2xl border border-base-content/10 bg-base-100/10 text-center shadow-none">
                <div className="card-body gap-4">
                    <h1 className="content-title">Erreur 404</h1>
                    <p className="voicey-muted">La page demandée est introuvable.</p>
                </div>
            </div>
        </section>
    )
}