# 🧾 Multi-Step Form with Validation (React + Next.js)

A responsive and accessible multi-step form built using **Next.js (App Router)**, **React Hook Form**, **Zod**, and **TailwindCSS**. This form walks users through entering personal information, address details, and account setup with real-time validation and a summary step before final submission.

---

## 📦 Tech Stack

- **Next.js (App Router)**
- **React Hook Form** – for form handling
- **Zod** – for schema-based form validation
- **TailwindCSS** – for styling (with dark mode support)
- **React Query** *(Bonus)* – to simulate API interaction

---

## 🧩 Form Structure

### 🔹 Step 1: Personal Information
- Full Name (required)
- Email (required, valid email format)
- Phone Number (required, min 10 digits)

### 🔹 Step 2: Address Details
- Street Address (required)
- City (required)
- Zip Code (required, numeric, min 5 digits)

### 🔹 Step 3: Account Setup
- Username (required, min 4 characters)
- Password (required, min 6 characters)
- Confirm Password (must match password)

### ✅ Final Step: Review
- Display all form data
- Option to go back and edit
- Submit logs data to console or simulates API call

---

## ✨ Features

- ✅ Multi-step navigation with **Next** / **Previous**
- ✅ Field-level validation with **Zod**
- ✅ Inline error messages
- ✅ Final summary before submission
- ✅ Data stored using local **useState** / **useReducer**
- ✅ Logs submitted data to console
- 🌐 Simulated API submission using **React Query**
- 🌙 **Dark mode** toggle using Tailwind
- 📱 Fully responsive for mobile users

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
npm run dev
