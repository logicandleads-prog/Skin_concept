export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={styles.btn}>
      {text}
    </button>
  );
}

const styles = {
  btn: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};