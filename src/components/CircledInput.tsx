import type { ChangeEventHandler, ComponentType, MouseEventHandler, SVGProps } from "react"

type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>

type CircledInputProps = {
    value: string
    handleValue: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    Icon: HeroIcon
    submit: MouseEventHandler<HTMLButtonElement>
    className?: string
}

export function CircledInput({value, handleValue, placeholder, Icon, submit, className = ""}: CircledInputProps) {
    return (
        <div
            className={`join flex h-[68px] items-center overflow-hidden rounded-[18px] border-[3px] border-base-content bg-transparent ${className}`}
        >
            <input
                className="input join-item input-ghost h-full flex-1 rounded-none border-0 bg-transparent px-[30px] text-[20px] md:text-[23px] lg:text-[26px] font-bold text-base-content shadow-none outline-none placeholder:text-base-content/80 focus:outline-none"
                value={value}
                onChange={handleValue}
                maxLength={18}
                placeholder={placeholder}
            />
            <button type="button" className="btn btn-ghost join-item mr-[25px] h-[34px] min-h-[34px] w-[34px] border-0 bg-transparent p-0 text-base-content shadow-none hover:bg-transparent hover:text-base-content" onClick={submit}>
                <Icon className="size-[38px] md:size-[44px] lg:size-[50px] text-current" />
            </button>
        </div>
    )
}