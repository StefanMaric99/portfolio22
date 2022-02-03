import React from 'react'

export default function Project({styling, title, description, img, git}) {
    return (
        <div id="project" className={"bg-dark text-light " + styling}>
            <div>
                <img style={{width:"150px", height:"150px"}} src={img} alt={title}/>
            </div>

            <div className="p-2">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={git}>Github</a>
            </div>
        </div>
    )
}