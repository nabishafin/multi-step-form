const AddressForm = ({ register, errors, darkMode }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">Street Address</label>
                <input
                    {...register("streetAddress")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.streetAddress && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.streetAddress.message}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                    {...register("city")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Zip Code</label>
                <input
                    {...register("zipCode")}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${darkMode
                            ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                            : "bg-white border-gray-300 focus:ring-blue-500"
                        }`}
                />
                {errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>
                )}
            </div>
        </div>
    );
};

export default AddressForm;