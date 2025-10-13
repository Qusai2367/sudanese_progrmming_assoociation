function Button({ title, customizBtn }) {
  return (
    <div>
      <button
        type="button"
        className={`btn btn${customizBtn}danger p-3 d-flex justify-content-center align-items-center`}
        style={{
          height: "2rem",
          marginTop: "3rem",
          width: "fit-content",
          borderRadius: "9999px",
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
