const Header = ({ darkMode, setDarkMode }) => {
    return (
        <div className="flex justify-between items-center mb-6 ">
            <h1 className="text-2xl font-bold gap-4">Multi-Step Form</h1>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-2 py-2 rounded-full ${darkMode
                        ? "bg-gray-700 flex  text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
            >
                {darkMode ? "☀️" : "🌙"}
            </button>
        </div>
    );
};

export default Header;
