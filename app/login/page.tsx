export default function Login() {
  return (
    <main style={{ padding: "60px 20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        style={{ width: "100%", padding: "10px", marginTop: "20px" }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
      />

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "10px",
          background: "#2e7d32",
          color: "white",
          border: "none"
        }}
      >
        Login
      </button>
    </main>
  )
}