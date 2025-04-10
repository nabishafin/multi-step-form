import React from "react";

const PersonalForm = ({ register, errors, darkMode }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                    {...register("fullName")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    {...register("email")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                    {...register("phoneNumber")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.phoneNumber.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PersonalForm;
