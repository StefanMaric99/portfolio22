

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#top">Stefan Maric</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#aboutMe">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tech">TECH</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">PROJECT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/1SXycGBAQGjnsXLBH6Q2i4DBL3LylnXNl/view" target="_blank">RESUME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/1nRGF9A6wRGupKXMYYlSpBeEp57qnMICg/view?usp=sharing" target="_blank">Cover Letter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}