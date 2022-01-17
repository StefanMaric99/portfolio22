const TECH = "TECHNOLOGIES AND LANGUAGES";
const STUDY = "CURRENTLY STUDYING";

function Img() {
    return (
        <div
            style={{
                width: "50px",
                height: "50px",
                background: "black",
                borderRadius: "50%"
            }}
        ></div>
    );
}

const imgs = [1,2,3,4,5,6,7,8]
const imgs2 = [1,2,3,4]

function SubTech({ title }) {
    return (
        <div>
            <h2>{title}</h2>

            {title === TECH ? (
                <div className="d-flex">
                    {imgs.map(i => {
                        return (
                            <Img />
                        )
                    })}
                    <Img />
                </div>
            ) : (
                <div>
                    <p>Study Images</p>
                </div>
            )}
        </div>
    );
}

export default function Tech() {
    return (
        <div className="section d-flex justify-content-center align-items-center flex-column">
            <SubTech title={TECH} />
            <SubTech title={STUDY} />
        </div>
    );
}