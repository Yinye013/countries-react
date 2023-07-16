import Page from "./Page";
/* eslint-disable react/prop-types */
const Inputs = ({
  input,
  setInput,
  selected,
  setSelected,
  darkMode,
  setDarkMode,
}) => {
  const inputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    setSelected("");
  };
  const selectChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
    setInput("");
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between  container">
        <form>
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-4 text-[1.8rem] shadow-lg bg-inherit outline-none"
            value={input}
            onChange={inputChange}
          />
        </form>
        <form>
          <select
            className="p-4 text-[1.8rem] shadow-lg bg-inherit outline-none transition-all"
            value={selected}
            onChange={selectChange}
          >
            <option>Select Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </form>
      </div>

      <Page
        input={input}
        selected={selected}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
};

export default Inputs;
