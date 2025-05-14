import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { login } = useAuth(); // uses the function from there for login and logout
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      await login(email, password);
      navigate("/");
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : "Login failed.";
      setErrorMsg(errMsg);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <div className="w-container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h2 className="logo-title text-primary">WealthWise</h2>
                    <p className="text-muted">Login to your account</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <label className="form-label fw-medium">Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control rounded-3 pe-5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                        onClick={() => setShowPassword((prev) => !prev)}
                        tabIndex={-1}
                        style={{ marginTop: 15 }}
                      >
                        {showPassword ? (
                          <FaEyeSlash size={18} />
                        ) : (
                          <FaEye size={18} />
                        )}
                      </button>
                    </div>

                    {errorMsg && (
                      <div className="alert alert-danger">{errorMsg}</div>
                    )}

                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Logging in...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-box-arrow-in-right me-1" />
                            Login
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="small mb-0">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary">
                          Create an account
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
