"use client";
export default function TextareaField({
  name,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div className="mb-3">
      <textarea
        style={{ backgroundColor: "#2a3b55ff", border: "none" }}
        name={name}
        className="form-control text-white border-secondary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        resize="none"
      />
      <label htmlFor={name} className="text-light">
        {placeholder}
      </label>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}
