import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-mysecondary text-base-content">
                <Link className="uppercase text-2xl font-extrabold text-myprimary font-my-font flex items-center">
                    <img src={logo} className="h-10 mr-1" />
                    <div className="flex flex-col leading-tight font-logo text-xl">
                        <span>Lingua</span>
                        <span>Learn</span>
                    </div>
                </Link>
                <div>
                    <span className="footer-title text-my-third">Services</span>
                    <a className="link link-hover text-my-white hover:text-myprimary">Classes</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Tutoring</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Translation</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Certification</a>
                </div>
                <div>
                    <span className="footer-title text-my-third">Company</span>
                    <a className="link link-hover text-my-white hover:text-myprimary">About us</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Contact</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Jobs</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-my-third">Legal</span>
                    <a className="link link-hover text-my-white hover:text-myprimary">Terms of use</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Privacy policy</a>
                    <a className="link link-hover text-my-white hover:text-myprimary">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-my-third text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Lingua Learn Ltd</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;