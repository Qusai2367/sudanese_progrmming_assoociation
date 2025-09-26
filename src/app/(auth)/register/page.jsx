"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import InputField from "../../components/auth/InputField";
import TextareaField from "../../components/auth/TextareaField";

const LANGS = [
  "JavaScript", "TypeScript", "Python", "Java", "C#", "C++",
  "PHP", "Go", "Rust", "Kotlin", "Swift", "Dart",
];

const FRAMEWORKS = [
  "React", "Next.js", "Vue", "Angular", "Svelte", "Node.js",
  "Express", "NestJS", "Django", "Flask", "Laravel", "Spring Boot",
  ".NET", "FastAPI", "Flutter", "React Native",
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

  const [errors, setErrors] = useState({});

  const toggleChip = (field, value) => {
    setForm((prev) => {
      const exists = prev[field].includes(value);
      const list = exists
        ? prev[field].filter((x) => x !== value)
        : [...prev[field], value];
      return { ...prev, [field]: list };
    });
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return regex.test(password);
  };

  const validateStep = (i) => {
    const newErrors = {};
    const r = form.role;

    if (STEPS[i].key === "basic") {
      if (!form.name.trim()) newErrors.name = "Name Required";
      if (!form.age) newErrors.age = "A geRequired";
      if (!form.email.trim()) newErrors.email = "Email Required";
      if (!form.password) newErrors.password = "Password Requiredة";
      else if (!isPasswordValid(form.password))
        newErrors.password = "Password Must Contin 8 character atlest and contin symbol";
      if (!form.checkPassword) newErrors.checkPassword = "Password Conform Required";
      else if (form.password !== form.checkPassword)
        newErrors.checkPassword = "Password unmatch";
      if (r === "provider" && !form.specialty.trim())
        newErrors.specialty = "Specialization Required";
    }

    if (STEPS[i].key === "skills" && r === "provider") {
      if (form.langs.length === 0) newErrors.langs = "Choose one Language at least";
    }

    if (STEPS[i].key === "details" && r === "provider") {
      if (!form.services.trim()) newErrors.services = "Services Required";
    }

    if (i === STEPS.length - 1) {
      if (!form.policy) newErrors.policy = "Terms and Conditions must approved";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    if (form.role === "buyer" && step === 1) setStep(3);
    else setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    if (form.role === "buyer" && step === 3) setStep(1);
    else setStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;
  };

  const progress = useMemo(() => {
    const visibleSteps = form.role === "provider" ? STEPS : [STEPS[0], STEPS[1]];
    const index = visibleSteps.findIndex((s) => s.key === STEPS[step]?.key);
    return Math.round(((index + 1) / visibleSteps.length) * 100);
  }, [step, form.role]);

  return (
    <main
      className="container py-5"
      style={{ maxWidth: 760 }}
    >
      <h1 className="text-center mb-4 text-white">Create Account</h1>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="d-flex justify-content-between small text-white">
          {STEPS.map((s, i) => (
            <span key={s.key} className={i === step ? "fw-bold" : "text-secondary"}>
              {i + 1}. {s.title}
            </span>
          ))}
        </div>
        <div className="progress mt-2">
          <div className="progress-bar bg-main" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <form
        className="card p-4 shadow text-light"
        style={{ backgroundColor: "#1e2939"}}
        onSubmit={onSubmit}
      >
        {/* Step 0: Role */}
        {step === 0 && (
          <div className="mb-3">
            <label className="form-label">Type Of Account</label>
            <div className="btn-group d-flex">
              <button
                type="button"
                className={`btn ${form.role === "provider" ? "bg-main text-white" : "btn-outline-light"} ms-2` }
                onClick={() => setForm({ ...form, role: "provider" })}
              >
               Service Provider
              </button>
              <button
                type="button"
                className={`btn ${form.role === "buyer" ? "bg-main text-white" : "btn-outline-light"}`}
                onClick={() => setForm({ ...form, role: "buyer" })}
              >
                client
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <>
            <InputField name="name" placeholder="Name" value={form.name} onChange={onChange} error={errors.name} />
            <InputField type="number" name="age" placeholder="Age" value={form.age} onChange={onChange} error={errors.age} />
            <InputField type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} error={errors.email} />
            <InputField type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} error={errors.password} />
            <InputField type="password" name="checkPassword" placeholder="Password Confirm" value={form.checkPassword} onChange={onChange} error={errors.checkPassword} />

            {form.role === "provider" && (
              <InputField name="specialty" placeholder="specialazation" value={form.specialty} onChange={onChange} error={errors.specialty} />
            )}
          </>
        )}

        {/* Step 2: Skills */}
        {step === 2 && form.role === "provider" && (
          <>
            <label className="form-label">Choose Programming Language</label>
            <div className="mb-3 d-flex flex-wrap gap-2">
              {LANGS.map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => toggleChip("langs", lang)}
                  className={`btn btn-sm ${form.langs.includes(lang) ? "bg-main" : "btn-outline-light"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            {errors.langs && <div className="text-danger">{errors.langs}</div>}

            <label className="form-label">Choose frameworks</label>
            <div className="mb-3 d-flex flex-wrap gap-2">
              {FRAMEWORKS.map((fw) => (
                <button
                  type="button"
                  key={fw}
                  onClick={() => toggleChip("frameworks", fw)}
                  className={`btn btn-sm ${form.frameworks.includes(fw) ? "bg-main" : "btn-outline-light"}`}
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
                <TextareaField name="services" placeholder="The Service you Provide" value={form.services} onChange={onChange} error={errors.services} />
                <InputField type="url" name="portfolio" placeholder="Your Portifolio (optionl)" value={form.portfolio} onChange={onChange} />
                <InputField name="projects" placeholder="Previous Projects (optional)" value={form.projects} onChange={onChange} />
                <InputField type="file" name="degree" placeholder="Certificates (optional)" value={form.degree} onChange={onChange} />
              </>
            )}

            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" id="policy" name="policy" checked={form.policy} onChange={onChange} />
              <label className="form-check-label text-white" htmlFor="policy">
                I agree to{" "}
                <Link href={"/terms"} className="info-text">
                  Terms And Conditions
                </Link>
              </label>
              {errors.policy && <div className="text-danger">{errors.policy}</div>}
            </div>
          </>
        )}

        {/* Navigation buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-outline-light" onClick={back} disabled={step === 0}>
            Previous
          </button>
          {step < (form.role === "provider" ? 3 : 1) ? (
            <button type="button" className="btn bg-main text-white" onClick={next}>
              Next
            </button>
          ) : (
            <Link href={"/"}>
            <button type="submit" className="btn btn-primary ">
              Send
            </button>
            </Link>
          )}
        </div>
      </form>
    </main>
  );
}