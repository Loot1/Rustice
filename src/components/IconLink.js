export default function IconLink({strongText, text, icon, iconSize}) {
    return (
        <a className="flex items-center mt-4 lineWhenHover" href="https://louissachy.fr" target="_blank">
            <ion-icon name={icon} style={{color:"white", fontSize: iconSize}}></ion-icon>
            <p id="test" style={{
                fontFamily:"CenturyGothic",
                color:"#C5BDCA",
                fontSize:"19px",
                marginLeft:"7px",
            }}>
                <strong style={{color:"C9C1CE"}}>{strongText}</strong> {text}
            </p>
        </a>
    )
}