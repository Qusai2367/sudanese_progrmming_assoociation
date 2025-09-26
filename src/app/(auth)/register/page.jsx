"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import InputField from "../../components/auth/InputField";
import TextareaField from "../../components/auth/TextareaField";
import { useAuth } from "@/app/Context/AuthContext";
import { usePathname } from "next/navigation";

const LANGS = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "PHP",
    "Go",
    "Rust",
    "Kotlin",
    "Swift",
    "Dart",
];

const FRAMEWORKS = [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "Svelte",
    "Node.js",
    "Express",
    "NestJS",
    "Django",
    "Flask",
    "Laravel",
    "Spring Boot",
    ".NET",
    "FastAPI",
    "Flutter",
    "React Native",
];

const STEPS = [
    { key: "role", title: "Type Of Account" },
    { key: "basic", title: "Personal Data" },
    { key: "skills", title: "Skills" },
    { key: "details", title: "More Details" },
];

export default function Register() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        role: "provider",
        name: "",
        age: "",
        email: "",
        password: "",
        checkPassword: "",
        specialty: "",
        services: "",
        portfolio: "",
        projects: "",
        policy: false,
        degree: [],
        langs: [],
        frameworks: [],
    });

    const { register } = useAuth();
    const [touched, setTouched] = useState({});

    const [errors, setErrors] = useState({});

    const toggleChip = (field, value) => {
        setForm((prev) => {
            const exists = prev[field].includes(value);
            const list = exists
                ? prev[field].filter((x) => x !== value)
                : [...prev[field], value];
            return { ...prev, [field]: list };
        });
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const isPasswordValid = (password) => {
        const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        return regex.test(password);
    };

    const validateStep = (i) => {
        const newErrors = {};
        const r = form.role;

        if (STEPS[i].key === "basic") {
            if (!form.name.trim() && r === "provider")
                newErrors.name = "Name Required";
            if (!form.age && r === "provider") newErrors.age = "Age Required";
            if (!form.email.trim()) newErrors.email = "Email Required";
            if (!form.password) newErrors.password = "Password Required";
            else if (!isPasswordValid(form.password))
                newErrors.password =
                    "Password must contain at least 8 characters and a symbol";
            if (!form.checkPassword)
                newErrors.checkPassword = "Password Confirm Required";
            else if (form.password !== form.checkPassword)
                newErrors.checkPassword = "Passwords do not match";
            if (r === "provider" && !form.specialty.trim())
                newErrors.specialty = "Specialization Required";
        }

        if (STEPS[i].key === "skills" && r === "provider") {
            if (form.langs.length === 0)
                newErrors.langs = "Choose at least one language";
        }

        if (STEPS[i].key === "details" && r === "provider") {
            if (!form.services.trim()) newErrors.services = "Services Required";
        }

        if (i === STEPS.length - 1 && !form.policy) {
            newErrors.policy = "Terms and Conditions must be approved";
        }

        return newErrors;
    };

    const next = () => {
        const newErrors = validateStep(step);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // Mark all fields in the current step as touched to show errors
            const currentStepKey = STEPS[step].key;
            let fieldsToTouch = [];

            if (currentStepKey === "basic") {
                fieldsToTouch = [
                    "name",
                    "age",
                    "email",
                    "password",
                    "checkPassword",
                    "specialty",
                ];
            } else if (currentStepKey === "skills") {
                fieldsToTouch = ["langs", "frameworks"];
            } else if (currentStepKey === "details") {
                fieldsToTouch = ["services", "portfolio", "projects", "policy"];
            }

            const stepTouched = fieldsToTouch.reduce(
                (acc, field) => ({ ...acc, [field]: true }),
                {}
            );
            setTouched((prev) => ({ ...prev, ...stepTouched }));
            return;
        }

        if (form.role === "buyer" && step === 1) setStep(3);
        else setStep((s) => Math.min(s + 1, STEPS.length - 1));
    };

    const back = () => {
        if (form.role === "buyer" && step === 3) setStep(1);
        else setStep((s) => Math.max(s - 1, 0));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Validate all steps before final submission
        let allErrors = {};
        for (let i = 0; i < STEPS.length; i++) {
            const stepErrors = validateStep(i);
            allErrors = { ...allErrors, ...stepErrors };
        }
        setErrors(allErrors);

        if (Object.keys(allErrors).length > 0) {
            // Mark all fields as touched to show all errors on submit
            const allFields = [
                "name",
                "age",
                "email",
                "password",
                "checkPassword",
                "specialty",
                "langs",
                "frameworks",
                "services",
                "portfolio",
                "projects",
                "policy",
            ];
            const allTouched = allFields.reduce(
                (acc, field) => ({ ...acc, [field]: true }),
                {}
            );
            setTouched((prev) => ({ ...prev, ...allTouched }));
            return;
        }

        register(form.email, form.password);
    };
    const progress = useMemo(() => {
        const visibleSteps =
            form.role === "provider" ? STEPS : [STEPS[0], STEPS[1]];

        // ابحث عن index في visibleSteps مباشرة
        const index = visibleSteps.findIndex(
            (s) => s.key === visibleSteps[step]?.key
        );

        // إذا index غير موجود، اجعله آخر خطوة
        const safeIndex = index === -1 ? visibleSteps.length - 1 : index;

        return Math.round(((safeIndex + 1) / visibleSteps.length) * 100);
    }, [step, form.role]);

    return (
        <main className="container py-5" style={{ maxWidth: 760 }}>
            <h1 className="text-center mb-4 text-white">Create Account</h1>

            {/* Progress bar */}
            <div className="mb-3">
                <div className="d-flex justify-content-between small text-white">
                    {STEPS.map((s, i) => (
                        <span
                            key={s.key}
                            className={
                                i === step ? "fw-bold" : "text-secondary"
                            }
                        >
                            {i + 1}. {s.title}
                        </span>
                    ))}
                </div>
                <div className="progress mt-2">
                    <div
                        className="progress-bar bg-main"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <form
                className="card p-4 shadow text-light"
                style={{ backgroundColor: "#1e2939" }}
                onSubmit={onSubmit}
            >
                {/* Step 0: Role */}
                {step === 0 && (
                    <div className="mb-3">
                        <label className="form-label">Type Of Account</label>
                        <div className="btn-group d-flex">
                            <button
                                type="button"
                                className={`btn ${
                                    form.role === "provider"
                                        ? "bg-main text-white"
                                        : "btn-outline-light"
                                } ms-2`}
                                onClick={() =>
                                    setForm({ ...form, role: "provider" })
                                }
                            >
                                Service Provider
                            </button>
                            <button
                                type="button"
                                className={`btn ${
                                    form.role === "buyer"
                                        ? "bg-main text-white"
                                        : "btn-outline-light"
                                }`}
                                onClick={() =>
                                    setForm({ ...form, role: "buyer" })
                                }
                            >
                                client
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 1: Basic Info */}
                {step === 1 && (
                    <>
                        <InputField
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={onChange}
                            error={
                                errors.name && touched.name ? errors.name : ""
                            }
                        />
                        <InputField
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={form.age}
                            onChange={onChange}
                            error={errors.age && touched.age ? errors.age : ""}
                        />
                        <InputField
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={onChange}
                            error={
                                errors.email && touched.email
                                    ? errors.email
                                    : ""
                            }
                        />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={onChange}
                            error={
                                errors.password && touched.password
                                    ? errors.password
                                    : ""
                            }
                        />
                        <InputField
                            type="password"
                            name="checkPassword"
                            placeholder="Password Confirm"
                            value={form.checkPassword}
                            onChange={onChange}
                            error={
                                errors.checkPassword && touched.checkPassword
                                    ? errors.checkPassword
                                    : ""
                            }
                        />

                        {form.role === "provider" && (
                            <InputField
                                name="specialty"
                                placeholder="specialazation"
                                value={form.specialty}
                                onChange={onChange}
                                error={
                                    errors.specialty && touched.specialty
                                        ? errors.specialty
                                        : ""
                                }
                            />
                        )}
                    </>
                )}

                {/* Step 2: Skills */}
                {step === 2 && form.role === "provider" && (
                    <>
                        <label className="form-label">
                            Choose Programming Language
                        </label>
                        <div className="mb-3 d-flex flex-wrap gap-2">
                            {LANGS.map((lang) => (
                                <button
                                    type="button"
                                    key={lang}
                                    onClick={() => toggleChip("langs", lang)}
                                    className={`btn btn-sm ${
                                        form.langs.includes(lang)
                                            ? "bg-main text-white"
                                            : "btn-outline-light"
                                    }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                        {errors.langs && touched.langs && (
                            <div className="text-danger">{errors.langs}</div>
                        )}

                        <label className="form-label">Choose frameworks</label>
                        <div className="mb-3 d-flex flex-wrap gap-2">
                            {FRAMEWORKS.map((fw) => (
                                <button
                                    type="button"
                                    key={fw}
                                    onClick={() => toggleChip("frameworks", fw)}
                                    className={`btn btn-sm ${
                                        form.frameworks.includes(fw)
                                            ? "bg-main text-white"
                                            : "btn-outline-light"
                                    }`}
                                >
                                    {fw}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                    <>
                        {form.role === "provider" && (
                            <>
                                <TextareaField
                                    name="services"
                                    placeholder="The Service you Provide"
                                    value={form.services}
                                    onChange={onChange}
                                    error={
                                        errors.services && touched.services
                                            ? errors.services
                                            : ""
                                    }
                                />
                                <InputField
                                    type="url"
                                    name="portfolio"
                                    placeholder="Your Portifolio (optionl)"
                                    value={form.portfolio}
                                    onChange={onChange}
                                    error={
                                        errors.portfolio && touched.portfolio
                                            ? errors.portfolio
                                            : ""
                                    }
                                />
                                <InputField
                                    name="projects"
                                    placeholder="Previous Projects (optional)"
                                    value={form.projects}
                                    onChange={onChange}
                                    error={
                                        errors.projects && touched.projects
                                            ? errors.projects
                                            : ""
                                    }
                                />
                            </>
                        )}

                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="policyCheck"
                                name="policy"
                                checked={form.policy}
                                onChange={onChange}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="policyCheck"
                            >
                                I agree to the <Link href="#">terms</Link> and
                                conditions
                            </label>
                            {errors.policy && touched.policy && (
                                <div className="text-danger">
                                    {errors.policy}
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4">
                    {step > 0 ?  (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={back}
                        >
                            Back
                        </button>
                    ): <div></div>}
                    {step < STEPS.length - 1 && (
                        <button
                            type="button"
                            className="btn bg-main text-white"
                            onClick={next}
                        >
                            Next
                        </button>
                    )}
                    {step === STEPS.length - 1 && (
                        <button
                            type="submit"
                            className="btn bg-main text-white"
                        >
                            Send
                        </button>
                    )}
                </div>
            </form>
        </main>
    );
}
