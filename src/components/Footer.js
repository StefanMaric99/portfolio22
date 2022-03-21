import React from 'react'

export default function Footer() {
    return (
        <footer class="pt-5 px-5 bg-dark text-light">
            <div class="row">
                <div class="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                    <small class="d-block mb-3 text-muted">&copy; 2022</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Links</h5>
                    <ul class="list-unstyled text-small">
                        <li><a className="link-secondary" href="https://github.com/StefanMaric99">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}