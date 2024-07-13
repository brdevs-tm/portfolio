import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Header from "../../components/Header";
import userImg from "../../assets/user-image.png";
import resumeFile from "../../assets/Resume.docx"; // Import the resume file
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./index.css"; // Import custom styles
import DownloadBtn from "../../components/ResumeDownloadBtn/DownloadBtn";

function HomePage() {
  document.title = "Home Page";
  const texts = ["a Front End developer", "Gamer", "Graphic Designer"];
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const gradients = [
      "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
      "linear-gradient(to right, #ff512f 0%, #dd2476 100%)",
      "linear-gradient(to right, #ffe259 0%, #ffa751 100%)",
      "linear-gradient(to right, #d4fc79 0%, #96e6a1 100%)",
      "linear-gradient(to right, #ff9a9e 0%, #fecfef 99%, #fe99ff 100%)",
    ];

    const changeGradient = () => {
      const randomGradient =
        gradients[Math.floor(Math.random() * gradients.length)];
      setGradient(randomGradient);
    };

    changeGradient(); // Set an initial gradient
    const intervalId = setInterval(changeGradient, 3000); // Change gradient every 3 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen relative">
        <div className="containerown px-4 py-10 relative z-10">
          <div className="flex items-center justify-between py-10">
            <div className="flex flex-col items-start" data-aos="fade-up">
              <span className="text-gray-600 text-2xl font-medium mb-2">
                Hello
              </span>
              <h1
                className="bg-clip-text text-transparent text-6xl font-bold mb-5 gradient-text"
                style={{
                  backgroundImage: gradient,
                }}
              >
                Jahongir Hamidov
              </h1>
              <p
                className="changer-text text-[#25202f] text-2xl font-normal mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Typewriter
                  words={texts}
                  loop={0} // Infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
              <a
                href={resumeFile}
                download="Resume_Jahongir_Hamidov.docx"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <DownloadBtn />
              </a>
            </div>
            <div className="flex-shrink-0" data-aos="fade-left">
              <img src={userImg} alt="userImg" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
