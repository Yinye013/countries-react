/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import Header from "./Header";

function Layouts({ children, darkMode, setDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
    </>
  );
}

export default Layouts;
