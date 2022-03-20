import React from 'react'
import IconGenerator from './iconGenerator';
import Project from './Project'
import projects from './Projects.json'
import "./projectSection.css";

export default function ProjectSection() {
    return (
        <div className="section d-flex justify-content-center align-items-center flex-column">
            <h2>Projects</h2>

            <div className="d-flex">

                {
                    projects.map(({ title, description, img, git }, index) => {
                        return (
                            <Project styling={'mx-2'} key={index} title={title} description={description} img={img} git={git} />
                        )
                    })}
            </div>

            <div className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                <h2>Capstone - Game Store Client</h2>
                <div className="container">
                    <div className="row">
                        <div className='col-6'>
                            <h5>Project Description</h5>
                            <p>The game store client wil allow users to download games, browse the catalogue, buy games.</p>
                            <p>It will also allow users to add friends, see what they are playing as well as chat with them. The game store client will offer games DRM free</p>
                        </div>

                        <div className='col-6'>
                            <div className='d-flex justify-content-center'>
                                <a className='doc-link' href="https://github.com/Anth64/gamestore_client" target='_blank'>
                                    <IconGenerator icon="devicon-github-original" fontSize='20px' />
                                    Github
                                </a>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <a className='doc-link' href="https://drive.google.com/drive/folders/1CT4owzk-JY2WPEB_3uL82wQ9AoyVwaZX" target='_blank'>Documents</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}