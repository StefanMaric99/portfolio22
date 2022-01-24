import React from 'react'
import Project from './Project'
import projects from './Projects.json'

export default function ProjectSection() {
    return (
        <div className="section d-flex justify-content-center align-items-center flex-column">
            <h2>Projects</h2>

            <div className="d-flex">

                {
                    projects.map(({title, description , img, git}, index) => {
                        return (
                            <Project styling={'mx-2'} key={index} title={title} description={description} img={img} git={git} />
                    )
                })}
            </div>


        </div>
    )
}