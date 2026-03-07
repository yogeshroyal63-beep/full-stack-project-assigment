import { useState } from "react";

function ConnectionTest() {

  const [message, setMessage] = useState("");

  const testConnection = async () => {
    try {
      const response = await fetch("/api/health");
      const data = await response.json();

      setMessage("✅ Success: " + data.message);
    } catch (error) {
      setMessage("❌ Failed to connect to server");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Backend Connection Test</h2>

      <button onClick={testConnection}>
        Test Connection
      </button>

      <p>{message}</p>
    </div>
  );
}

export default ConnectionTest;