"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Container, Card, Form, Button, ProgressBar } from "react-bootstrap";
import { providers } from "../../services/data";
import { serviceQuestions } from "../../services/servicesQuestions";

export default function RequestService() {
  const { id } = useParams();
  const router = useRouter();
  const provider = providers.find((p) => p.id === Number(id));
  const questions = serviceQuestions[provider?.service] || [];

  const [step, setStep] = useState(0);
  const [form, setForm] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`serviceRequest-${id}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem(`serviceRequest-${id}`, JSON.stringify(form));
  }, [form, id]);

  if (!provider) {
    return (
      <Container className="text-center mt-5">
        <h2> لا يوجد مقدم خدمة بهذا الرقم</h2>
        <Button variant="secondary" onClick={() => router.push("/services")}>
          رجوع للخدمات
        </Button>
      </Container>
    );
  }

  const currentQuestion = questions[step];

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentQuestion.required && !form[currentQuestion.name]) {
      alert(`الرجاء تعبئة الحقل: ${currentQuestion.label}`);
      return;
    }
    setStep((s) => Math.min(s + 1, questions.length - 1));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem(`serviceRequest-${id}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Container className="text-center mt-5">
        <h2>✅ تم إرسال طلبك بنجاح!</h2>
        <p>سيتواصل مقدم الخدمة معك قريبًا.</p>
        <Button variant="primary" onClick={() => router.push("/services")}>
          العودة للخدمات
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card
        className="p-4 shadow-sm"
        style={{ backgroundColor: "#1e2939", color: "#fff" }}
      >
        <h3 className="mb-4 text-center">طلب خدمة: {provider.service}</h3>

        <ProgressBar
          now={Math.round(((step + 1) / questions.length) * 100)}
          className="mb-4"
        />

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>{currentQuestion.label}</Form.Label>
            {currentQuestion.type === "textarea" ? (
              <Form.Control
                style={{ backgroundColor: "#2a3b55ff", border: "none" }}
                as="textarea"
                rows={4}
                name={currentQuestion.name}
                value={form[currentQuestion.name] || ""}
                onChange={onChange}
                placeholder={currentQuestion.label}
                required={currentQuestion.required}
              />
            ) : (
              <Form.Control
                style={{ backgroundColor: "#2a3b55ff", border: "none" }}
                type={currentQuestion.type}
                name={currentQuestion.name}
                value={form[currentQuestion.name] || ""}
                onChange={onChange}
                placeholder={currentQuestion.label}
                required={currentQuestion.required}
              />
            )}
          </Form.Group>

          <div className="d-flex justify-content-between mt-3">
            <Button
              className="text-light"
              variant="outline-secondary"
              onClick={prevStep}
              disabled={step === 0}
            >
              السابق
            </Button>

            {step < questions.length - 1 ? (
              <Button variant="primary" onClick={nextStep}>
                التالي
              </Button>
            ) : (
              <Button type="submit" variant="success">
                إرسال الطلب
              </Button>
            )}
          </div>
        </Form>

        <Card
          className="mt-4 p-3"
          style={{ backgroundColor: "#2a3b55ff", color: "#fff" }}
        >
          <h5>معاينة الطلب</h5>
          {questions.map((q, i) => (
            <p key={i}>
              <strong>{q.label}:</strong> {form[q.name] || "-"}
            </p>
          ))}
        </Card>
      </Card>
    </Container>
  );
}
