export default function IconGenerator({icon, fontSize="100px"}) {
    return <i className={icon + " colored"} style={{fontSize: fontSize, marginRight:"10px"}} />
}