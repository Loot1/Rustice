import type { ReactNode } from "react"

type CircledButtonProps = {
    children: ReactNode
}

export function CircledButton({children}: CircledButtonProps) {
    return (
        <button
            type="button"
            className="btn btn-outline font-display ml-16 hidden h-auto min-h-0 rounded-full border-[3px] border-base-content bg-transparent px-10 py-2 text-[20px] text-base-content shadow-none hover:border-base-content hover:bg-transparent hover:text-base-content lg:inline-flex"
        >
            {children}
        </button>
    )
}