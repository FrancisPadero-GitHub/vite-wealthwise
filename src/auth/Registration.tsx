import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Registration() {
  const { register } = useAuth();
  const navigate = useNavigate(); // use this if you want to navigate somewhere in javascript functiosn then Link for the markup

  // Form state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [terms, setTerms] = useState(false);

  // UI state
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!terms) {
      setErrorMsg("You must agree to the terms and conditions.");
      return;
    }
    if (password !== cpassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await register(email, password, { firstname, lastname });
      setSuccessMsg("Registration successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Registration failed.";
      setErrorMsg(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-container">
      <div className="container py-5">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10 col-sm-12">
                <div className="card shadow-lg border-0 rounded-4">
                  <div className="card-body p-5">
                    <div className="text-center mb-4">
                      <h2 className="logo-title text-primary">WealthWise</h2>
                      <p className="text-muted">Create an Account</p>
                    </div>
                    <form
                      className="needs-validation"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="firstName"
                              className="form-label fw-medium"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              className="form-control rounded-3"
                              id="firstName"
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                              required
                              disabled={loading}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="lastName"
                              className="form-label fw-medium"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              className="form-control rounded-3"
                              id="lastName"
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                              required
                              disabled={loading}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="yourEmail"
                              className="form-label fw-medium"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control rounded-3"
                              id="yourEmail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              disabled={loading}
                            />
                          </div>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="yourPassword"
                              className="form-label fw-medium"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control rounded-3"
                              id="yourPassword"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              disabled={loading}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="confirmPassword"
                              className="form-label fw-medium"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="cpassword"
                              className="form-control rounded-3"
                              id="confirmPassword"
                              value={cpassword}
                              onChange={(e) => setCPassword(e.target.value)}
                              required
                              disabled={loading}
                            />
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              name="terms"
                              type="checkbox"
                              id="acceptTerms"
                              checked={terms}
                              onChange={(e) => setTerms(e.target.checked)}
                              required
                              disabled={loading}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="acceptTerms"
                              style={{ fontSize: 14 }}
                            >
                              I agree and accept the{" "}
                              <Link
                                to="#"
                                className="text-decoration-underline"
                              >
                                terms and conditions
                              </Link>
                            </label>
                          </div>
                          <button
                            className="btn btn-primary w-100 mb-3 rounded-3 fw-medium"
                            type="submit"
                            name="register"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Creating Account...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-person-plus me-2" /> Create
                                Account
                              </>
                            )}
                          </button>
                          {errorMsg && (
                            <div className="alert alert-danger">{errorMsg}</div>
                          )}
                          {successMsg && (
                            <div className="alert alert-success">
                              {successMsg}
                            </div>
                          )}
                          <p
                            className="small text-center mb-0"
                            style={{ fontSize: 14 }}
                          >
                            Already have an account?{" "}
                            <Link
                              to="/login"
                              className="text-decoration-underline"
                            >
                              Log in
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
