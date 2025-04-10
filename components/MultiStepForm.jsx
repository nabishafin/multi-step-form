"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
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

// Create an Axios instance (optional but recommended)
const api = axios.create({
    baseURL: "https://your-api-endpoint.com/api",
});

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

    // Define the mutation for form submission
    const submitFormMutation = useMutation({
        mutationFn: (formData) => {
            return api.post("/submit-form", formData);
        },
        onSuccess: (data) => {
            // Handle successful submission
            console.log("Form submitted successfully:", data);
            // You can redirect or show a success message here
        },
        onError: (error) => {
            // Handle error
            console.error("Error submitting form:", error);
            // You can show an error message here
        },
    });

    const onSubmit = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        if (step < 3) {
            handleNext();
        } else {
            // Combine all form data and submit
            const finalData = { ...formData, ...data };
            submitFormMutation.mutate(finalData);
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
                            <div></div>
                        )}
                        <button
                            type="submit"
                            disabled={submitFormMutation.isPending}
                            className={`px-4 py-2 rounded-md text-white ${step === 3
                                ? "bg-blue-500 hover:bg-blue-600"
                                : "bg-blue-500 hover:bg-blue-600"
                                } ${submitFormMutation.isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {submitFormMutation.isPending ? (
                                "Submitting..."
                            ) : step === 3 ? (
                                "Submit"
                            ) : (
                                "Next"
                            )}
                        </button>
                    </div>

                    {/* Show error message if submission fails */}
                    {submitFormMutation.isError && (
                        <div className="text-red-500 text-sm mt-2">
                            Error submitting form: {submitFormMutation.error.message}
                        </div>
                    )}
                </form>

                {/* Form Summary on Step 3 */}
                {step === 3 && <Summary darkMode={darkMode} formData={formData} />}
            </div>
        </div>
    );
};

export default MultiStepForm;
