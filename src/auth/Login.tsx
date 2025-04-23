import "../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginTest() {
  return (
    <div className="w-container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  {/* Title Section */}
                  <div className="text-center mb-4">
                    <h2 className="logo-title text-primary">WealthWise</h2>
                    <p className="text-muted">Login to your account</p>
                  </div>
                  {/* Login Form */}
                  <form
                    method="POST"
                    action="../controller/authLogin.php"
                    className="needs-validation"
                    noValidate
                  >
                    {/* Email Input */}
                    <div className="mb-3">
                      <label
                        htmlFor="yourUsername"
                        className="form-label fw-medium"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-3"
                        id="yourUsername"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your email address!
                      </div>
                    </div>
                    {/* Password Input */}
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
                        className="form-control rounded-3 "
                        id="yourPassword"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>
                    {/* Remember Me and Forgot Password */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                          style={{ fontSize: 14 }}
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-primary small">
                        Forgot Password?
                      </a>
                    </div>
                    {/* Submit Button */}
                    <div className="mb-3">
                      <button
                        className="btn btn-primary w-100 py-2"
                        type="submit"
                        name="login"
                      >
                        <i className="bi bi-box-arrow-in-right me-1" /> Login
                      </button>
                    </div>
                    {/* Register Link */}
                    <div className="text-center">
                      <p className="small mb-0">
                        Don't have an account?{" "}
                        <a href="registration.php" className="text-primary">
                          Create an account
                        </a>
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
