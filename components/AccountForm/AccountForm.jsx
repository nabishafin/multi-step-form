const AccountForm = ({ register, errors, darkMode }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                    {...register("username")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.username && (
                    <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                    {...register("password")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                    type="password"
                />
                {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">
                    Confirm Password
                </label>
                <input
                    {...register("confirmPassword")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                    type="password"
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AccountForm;
