

export default function Registration() {
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
                      action="../controller/authRegister.php"
                      method="POST"
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
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your first name!
                            </div>
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
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your last name!
                            </div>
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
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter a valid email address!
                            </div>
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
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
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
                              required
                            />
                            <div className="invalid-feedback">
                              Please confirm your password!
                            </div>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              name="terms"
                              type="checkbox"
                              defaultValue=""
                              id="acceptTerms"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="acceptTerms"
                              style={{ fontSize: 14 }}
                            >
                              I agree and accept the{" "}
                              <a href="#" className="text-decoration-underline">
                                terms and conditions
                              </a>
                            </label>
                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                          <button
                            className="btn btn-primary w-100 mb-3 rounded-3 fw-medium"
                            type="submit"
                            name="register"
                          >
                            <i className="bi bi-person-plus me-2" /> Create
                            Account
                          </button>
                          <p
                            className="small text-center mb-0"
                            style={{ fontSize: 14 }}
                          >
                            Already have an account?{" "}
                            <a
                              href="login.php"
                              className="text-decoration-underline"
                            >
                              Log in
                            </a>
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
