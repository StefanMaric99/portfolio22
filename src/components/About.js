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
                    I am currently doing now is angular, mongoDB, Node.js, swift and capstone. Currently I have
                    about 2 years worth of experience with oop concepts in Java and C#, also have
                    experience with Javascript, html/css, MySql, python and asp.net. Definitely enjoyed this semester as its been quite challenging with assignment deliverables and group projects. As the final semester wraps up I
                    can come to the conclusion that my choice to study at GBC was the right one.
                </p>

                <h3 className="mb-5 text-center" >Quote</h3>
                <p className="text-center">"You have power over your mind – not outside events. Realize this, and you will find strength.”
                   - Marcus Aurelius
                </p>
            </div>
        </div>
    );
}