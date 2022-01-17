import "./aboutMe.css";

export default function About() {
    return (
        <div  id="aboutMe"
             className="aboutContainer bg-dark text-light d-flex justify-content-center align-items-center"
        >

            <div className="aboutContainer">
                <h2 className="mb-5 text-center">ABOUT ME</h2>

                <p className="text-center">
                    I'm a third year student
                    at George Brown College for Computer Programming. I’m familiar with a variety
                    of computer programming languages and markup. I have a few hobbies that include
                    sports, football,basketball and swimming. Some of the relevant course work that
                    I am currently doing now is webdev using spring(java), applied data science,
                    android development using java and react native and devops. Currently I have
                    about 2 years worth of experience with oop concepts in Java and C#, also have
                    experience with Javascript, html/css, MySql, python.
                </p>
            </div>
        </div>
    );
}