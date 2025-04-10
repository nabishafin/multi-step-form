const Navbar = ({ step, darkMode }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex flex-col items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${step === stepNumber
                                ? "bg-blue-500 text-white"
                                : step > stepNumber
                                    ? "bg-green-500 text-white"
                                    : darkMode
                                        ? "bg-gray-600 text-white"
                                        : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {stepNumber}
                        </div>
                        <span className="text-xs mt-1">
                            {stepNumber === 1
                                ? "Personal"
                                : stepNumber === 2
                                    ? "Address"
                                    : "Account"}
                        </span>
                    </div>
                ))}
            </div>
            <div
                className={`w-full h-1 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-200"
                    }`}
            >
                <div
                    className={`h-1 rounded-full ${step >= 3 ? "bg-green-500" : "bg-blue-500"
                        }`}
                    style={{ width: `${(step - 1) * 50}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Navbar;
