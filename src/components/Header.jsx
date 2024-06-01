import { useEffect } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <header className="bg-white">
        <div className="containerown px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-16" data-aos="fade-right">
              <img src={logo} alt="logo" className="h-12" />
              <ul className="flex items-center gap-8">
                <li className="nav-link" data-aos="fade-down">
                  <a
                    href="#about"
                    className="text-gray-700 text-lg font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li
                  className="nav-link"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <a
                    href="#services"
                    className="text-gray-700 text-lg font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    Services
                  </a>
                </li>
                <li
                  className="nav-link"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <a
                    href="#works"
                    className="text-gray-700 text-lg font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    Works
                  </a>
                </li>
                <li
                  className="nav-link"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <a
                    href="#blog"
                    className="text-gray-700 text-lg font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center" data-aos="fade-left">
              <button
                className="flex items-center justify-center p-4 rounded-full bg-white shadow-lg transition-all duration-500 border-2 border-transparent hover:shadow-xl active:shadow-[10px_10px_80px_rgb(70,20,205)]"
                data-aos="zoom-in"
              >
                <img src={hamburger} alt="menu" className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
