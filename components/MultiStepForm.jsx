"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalForm from "./PersonalForm/PersonalForm";
import AddressForm from "./AddressForm/AddressForm";
import AccountForm from "./AccountForm/AccountForm";
import {
    accountSchema,
    addressSchema,
    personalInfoSchema,
} from "@/utilities/formSchemas";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Summary from "./Summary/Summary";

const MultiStepForm = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [darkMode, setDarkMode] = useState(false);

    // Handle form steps
    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handlePrevious = () => setStep((prevStep) => prevStep - 1);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(
            step === 1
                ? personalInfoSchema
                : step === 2
                    ? addressSchema
                    : accountSchema
        ),
        defaultValues: formData,
    });

    const onSubmit = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        if (step < 3) {
            handleNext();
        } else {
            console.log("Form Submitted:", { ...formData, ...data });
            // Simulate API call here (React Query/RTK Query)
        }
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"
                }`}
        >
            <div
                className={`w-full max-w-md rounded-lg p-6 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                    } shadow-lg`}
            >
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />

                <Navbar step={step} darkMode={darkMode} />

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                        <PersonalForm
                            register={register}
                            errors={errors}
                            darkMode={darkMode}
                        />
                    )}

                    {/* Step 2: Address Details */}
                    {step === 2 && (
                        <AddressForm
                            register={register}
                            errors={errors}
                            darkMode={darkMode}
                        />
                    )}

                    {/* Step 3: Account Setup */}
                    {step === 3 && (
                        <AccountForm
                            register={register}
                            errors={errors}
                            darkMode={darkMode}
                        />
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className={`px-4 py-2 rounded-md ${darkMode
                                        ? "bg-gray-600 hover:bg-gray-500"
                                        : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                Previous
                            </button>
                        ) : (
                            <div></div> // Empty div to maintain space-between alignment
                        )}
                        <button
                            type="submit"
                            className={`px-4 py-2 rounded-md text-white ${step === 3
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            {step === 3 ? "Submit" : "Next"}
                        </button>
                    </div>
                </form>

                {/* Form Summary on Step 3 */}
                {step === 3 && <Summary darkMode={darkMode} formData={formData} />}
            </div>
        </div>
    );
};

export default MultiStepForm;
