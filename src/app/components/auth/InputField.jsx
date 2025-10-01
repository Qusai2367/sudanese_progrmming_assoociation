"use client";

export default function InputField({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div className="mb-3 form-floating">
      <input
        style={{ backgroundColor: "#2a3b55ff", border: "none" }}
        type={type}
        name={name}
        className="form-control text-white border-secondary input-style-2"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="text-light">
        {placeholder}
      </label>
      {error && <div className="text-danger small mt-1">{error}</div>}
    </div>
  );
}
