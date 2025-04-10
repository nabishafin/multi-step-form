const Summary = ({ darkMode, formData }) => {
    return (
        <div
            className={`mt-6 p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
        >
            <h3 className="text-lg font-medium mb-4">Summary</h3>
            <ul
                className={`space-y-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
            >
                {Object.entries(formData).map(([key, value]) => (
                    <li key={key} className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold capitalize sm:w-40">
                            {key.replace(/_/g, " ")}:
                        </span>
                        <span className="sm:ml-2 break-words">{String(value)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Summary;
