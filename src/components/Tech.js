import "./Tech.css";
import IconGenerator from "./iconGenerator";
import icons from "./icons";

const TECH = "TECHNOLOGIES AND LANGUAGES";
const STUDY = "CURRENTLY STUDYING";

function SubTech({title}) {
    return (
        <div className="mb-5">
            <h2 className="text-center mb-5">{title}</h2>

            {title === TECH ? (
                <div className="d-flex">
                    {icons['tech'].map((i, index) => {
                        return (
                            <IconGenerator key={index} icon={i}/>
                        )
                    })}
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    {icons['study'].map((i, index) => {
                        return (
                            <IconGenerator key={index} icon={i}/>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default function Tech() {
    return (
        <div id="tech" className="section d-flex justify-content-center align-items-center flex-column">
            <SubTech title={TECH}/>
            <SubTech title={STUDY}/>
        </div>
    );
}