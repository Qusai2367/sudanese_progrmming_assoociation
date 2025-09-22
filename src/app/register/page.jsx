"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";

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
  { key: "role", title: "نوع الحساب" },
  { key: "basic", title: "بيانات أساسية" },
  { key: "skills", title: "المهارات" },
  { key: "details", title: "تفاصيل إضافية" },
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
      if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
      if (!form.age) newErrors.age = "العمر مطلوب";
      if (!form.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
      if (!form.password) newErrors.password = "كلمة المرور مطلوبة";
      else if (!isPasswordValid(form.password))
        newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل وتحتوي على رمز";
      if (!form.checkPassword) newErrors.checkPassword = "تأكيد كلمة المرور مطلوب";
      else if (form.password !== form.checkPassword)
        newErrors.checkPassword = "كلمة المرور غير متطابقة";
      if (r === "provider" && !form.specialty.trim())
        newErrors.specialty = "التخصص مطلوب";
    }

    if (STEPS[i].key === "skills" && r === "provider") {
      if (form.langs.length === 0) newErrors.langs = "اختر لغة واحدة على الأقل";
    }

    if (STEPS[i].key === "details" && r === "provider") {
      if (!form.services.trim()) newErrors.services = "الخدمات مطلوبة";
    }

    if (i === STEPS.length - 1) {
      if (!form.policy) newErrors.policy = "يجب الموافقة على الشروط والأحكام";
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
      dir="rtl"
      lang="ar"
      className="container py-5"
      style={{ maxWidth: 760 }}
    >
      <h1 className="text-center mb-4 text-white">إنشاء حساب</h1>

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
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
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
            <label className="form-label">نوع الحساب</label>
            <div className="btn-group d-flex">
              <button
                type="button"
                className={`btn ${form.role === "provider" ? "btn-primary" : "btn-outline-light"} ms-2` }
                onClick={() => setForm({ ...form, role: "provider" })}
              >
                مقدم خدمة
              </button>
              <button
                type="button"
                className={`btn ${form.role === "buyer" ? "btn-primary" : "btn-outline-light"}`}
                onClick={() => setForm({ ...form, role: "buyer" })}
              >
                مشتري
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <>
            <InputField name="name" placeholder="الاسم" value={form.name} onChange={onChange} error={errors.name} />
            <InputField type="number" name="age" placeholder="العمر" value={form.age} onChange={onChange} error={errors.age} />
            <InputField type="email" name="email" placeholder="البريد الإلكتروني" value={form.email} onChange={onChange} error={errors.email} />
            <InputField type="password" name="password" placeholder="كلمة المرور" value={form.password} onChange={onChange} error={errors.password} />
            <InputField type="password" name="checkPassword" placeholder="تأكيد كلمة المرور" value={form.checkPassword} onChange={onChange} error={errors.checkPassword} />

            {form.role === "provider" && (
              <InputField name="specialty" placeholder="التخصص" value={form.specialty} onChange={onChange} error={errors.specialty} />
            )}
          </>
        )}

        {/* Step 2: Skills */}
        {step === 2 && form.role === "provider" && (
          <>
            <label className="form-label">اختر لغات البرمجة</label>
            <div className="mb-3 d-flex flex-wrap gap-2">
              {LANGS.map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => toggleChip("langs", lang)}
                  className={`btn btn-sm ${form.langs.includes(lang) ? "btn-primary" : "btn-outline-light"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            {errors.langs && <div className="text-danger">{errors.langs}</div>}

            <label className="form-label">اختر أطر العمل</label>
            <div className="mb-3 d-flex flex-wrap gap-2">
              {FRAMEWORKS.map((fw) => (
                <button
                  type="button"
                  key={fw}
                  onClick={() => toggleChip("frameworks", fw)}
                  className={`btn btn-sm ${form.frameworks.includes(fw) ? "btn-primary" : "btn-outline-light"}`}
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
                <TextareaField name="services" placeholder="الخدمات التي تقدمها" value={form.services} onChange={onChange} error={errors.services} />
                <InputField type="url" name="portfolio" placeholder="رابط البورتفوليو (اختياري)" value={form.portfolio} onChange={onChange} />
                <InputField name="projects" placeholder="مشاريع سابقة (اختياري)" value={form.projects} onChange={onChange} />
                <InputField type="file" name="degree" placeholder="الشهادة (اختياري)" value={form.degree} onChange={onChange} />
              </>
            )}

            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" id="policy" name="policy" checked={form.policy} onChange={onChange} />
              <label className="form-check-label text-white" htmlFor="policy">
                أوافق على{" "}
                <Link href={"/terms"} className="info-text">
                  الشروط و الأحكام
                </Link>
              </label>
              {errors.policy && <div className="text-danger">{errors.policy}</div>}
            </div>
          </>
        )}

        {/* Navigation buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-outline-light" onClick={back} disabled={step === 0}>
            السابق
          </button>
          {step < (form.role === "provider" ? 3 : 1) ? (
            <button type="button" className="btn btn-primary" onClick={next}>
              التالي
            </button>
          ) : (
            <Link href={"/"}>
            <button type="submit" className="btn btn-success">
              إرسال
            </button>
            </Link>
          )}
        </div>
      </form>
    </main>
  );
}
