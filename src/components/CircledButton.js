export default function CircledButton({children}) {
    return (
        <button
            className="ml-16 border-white text-white hidden lg:flex"
            style={{
                borderStyle:"solid",
                borderWidth:"3px",
                borderRadius:"45px",
                paddingTop:"10px",
                paddingRight:"40px",
                paddingLeft:"40px",
                paddingBottom:"10px",
                fontSize:"20px",
                fontFamily:"ShowcardGothic"
            }}
        >
            {children}
        </button>
    )
}