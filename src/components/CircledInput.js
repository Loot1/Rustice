export default function CircledInput({value, handleValue, placeholder, iconName, submit}) {
    return (
        <div
            className="flex items-center mb-6"
            style={{borderWidth:"3px", borderRadius:"18px", borderColor:"white", borderStyle:"solid", height:"68px"}}
        >
            <input
                value={value}
                onChange={handleValue}
                maxLength={18}
                placeholder={placeholder}
                style={{backgroundColor:"transparent", fontSize:"20px", fontWeight:"bold", color:"white", paddingRight:"30px", paddingLeft:"30px", outline:"none"}}
            />
            <button style={{height:"34px", width:"34px", marginRight:"25px"}} onClick={submit}>
                <ion-icon name={iconName} style={{color:"white", fontSize:"38px"}}></ion-icon>
            </button>
        </div>
    )
}