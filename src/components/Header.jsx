import DarkMode from "./DarkMode/DarkMode";

// eslint-disable-next-line react/prop-types
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="shadow-lg mb-[3.2rem]">
      <nav className="container">
        <header className="flex justify-between items-center">
          <h1 className="text-[1.8rem] lg:text-[3rem] font-semibold p-3">
            Where In The World?
          </h1>
          <DarkMode darkMode={darkMode} setMode={setDarkMode} />
        </header>
      </nav>
    </header>
  );
};

export default Header;
