import Transactions from "./Transactions";
import Reminders from "./Reminders";

export default function Content() {
  return (
    <main>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>Home</div>
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <section className="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              {/* Balance Modal Card */}
              <div
                className="modal fade"
                id="editBalanceModal"
                tabIndex={-1}
                aria-labelledby="editBalanceModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <form id="editBalanceForm">
                      <div className="modal-header">
                        <h5 className="modal-title" id="editBalanceModalLabel">
                          Edit Balance
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label htmlFor="balanceAmount" className="form-label">
                            New Balance Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="balanceAmount"
                            name="balance"
                            step="0.01"
                            defaultValue="0"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          name="edit_balance"
                          className="btn btn-primary"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* End of Modal Card */}

              {/* Balance Card */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4">
                <div className="card info-card balance-card">
                  <div className="filter">
                    <div className="icon" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </div>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li>
                        <div
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#editBalanceModal"
                        >
                          Edit
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Balance <span>| Cash</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-wallet2" />
                      </div>
                      <div className="ps-3">
                        <h6 id="currentBalance">₱ 500</h6>
                        <span
                          id="balanceStatus"
                          className="text-success small pt-1 fw-bold"
                        >
                          Debt Free
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Balance Card */}
              {/* Total Expenses Card */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4">
                <div className="card info-card expense-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Total Expenses <span>| This Month</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cash-coin" />
                      </div>
                      <div className="ps-3">
                        <h6 className="text-danger">₱ 2500</h6>
                        <span className="text-danger small pt-1 fw-bold">
                          12%
                        </span>
                        <span className="text-muted small pt-2 ps-1">
                          increase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Total Expenses Card */}
              {/* Total Income Card */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-4">
                <div className="card info-card income-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Total Income <span>|This Month</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cash-coin" />
                      </div>
                      <div className="ps-3">
                        <h6 className="text-success">₱ 5000</h6>
                        <span className="text-success small pt-1 fw-bold">
                          12%
                        </span>
                        <span className="text-muted small pt-2 ps-1">
                          increase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Income Card */}
            </div>
            {/* End cards */}
            {/*Add Button & Dummy Data */}
            <div className="d-flex justify-content-between">
              <form>
                <button
                  type="submit"
                  name="dummy_data"
                  className="btn btn-secondary"
                  title="Generate dummy data for testing"
                >
                  <i className="bi bi-box-seam" /> Generate
                </button>
              </form>
              {/*Add Dummy Data */}
              <div
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#addRecordModal"
              >
                <i className="bi bi-plus-lg" />
              </div>
            </div>
            {/* Add new record modal */}
            <div
              className="modal fade"
              id="addRecordModal"
              tabIndex={-1}
              aria-labelledby="addRecordModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6 className="modal-title" id="addRecordModalLabel">
                      New Record
                    </h6>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form
                      action="../controller/transactionAddRecord.php"
                      method="POST"
                    >
                      <div className="row mb-3">
                        {/* Amount */}
                        <div className="col-md-4">
                          <label htmlFor="inputNumber" className="form-label">
                            Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="amount"
                            id="inputNumber"
                            min={0}
                          />
                        </div>
                        {/* Category */}
                        <div className="col-md-4">
                          <label className="form-label">Category</label>
                          <div
                            style={{
                              border: "1px solid #ced4da",
                              borderRadius: "0.375rem",
                            }}
                          >
                            <select
                              className="form-select"
                              name="category"
                              id="editCategory"
                              aria-label="Default select example"
                              style={{
                                width: "100%",
                                border: "none",
                                maxHeight: 200,
                                overflowY: "auto",
                              }}
                            >
                              {/* Daily Expenses */}
                              <optgroup label="Daily Expenses">
                                <option value="Food and Drinks">
                                  Food and Drinks
                                </option>
                                <option value="Shopping">Shopping</option>
                                <option value="House Rent">House Rent</option>
                                <option value="Transportation">
                                  Transportation
                                </option>
                                <option value="Health & Medical">
                                  Health &amp; Medical
                                </option>
                                <option value="Education">Education</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Personal Care">
                                  Personal Care
                                </option>
                                <option value="Entertainment">
                                  Entertainment
                                </option>
                                <option value="Dining Out">Dining Out</option>
                                <option value="Travel">Travel</option>
                                <option value="Clothing & Accessories">
                                  Clothing &amp; Accessories
                                </option>
                                <option value="Childcare">Childcare</option>
                                <option value="Pet Care">Pet Care</option>
                                <option value="Subscriptions & Memberships">
                                  Subscriptions &amp; Memberships
                                </option>
                              </optgroup>
                              {/* Assets */}
                              <optgroup label="Assets">
                                <option value="Vehicle">Vehicle</option>
                                <option value="Life and Entertainment">
                                  Life and Entertainment
                                </option>
                                <option value="Communication & PC">
                                  Communication &amp; PC
                                </option>
                                <option value="Home">Home</option>
                                <option value="Furniture & Appliances">
                                  Furniture &amp; Appliances
                                </option>
                                <option value="Electronics">Electronics</option>
                                <option value="Jewelry & Luxury Items">
                                  Jewelry &amp; Luxury Items
                                </option>
                                <option value="Art & Collectibles">
                                  Art &amp; Collectibles
                                </option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Vehicles & Boats">
                                  Vehicles &amp; Boats
                                </option>
                              </optgroup>
                              {/* Financial */}
                              <optgroup label="Financial">
                                <option value="Financial Expenses">
                                  Financial Expenses
                                </option>
                                <option value="Investments">Investments</option>
                                <option value="Income">Income</option>
                                <option value="Savings">Savings</option>
                                <option value="Debt Payments">
                                  Debt Payments
                                </option>
                                <option value="Taxes">Taxes</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Gifts & Donations">
                                  Gifts &amp; Donations
                                </option>
                                <option value="Loan Payments">
                                  Loan Payments
                                </option>
                                <option value="Bank Fees">Bank Fees</option>
                                <option value="Retirement Contributions">
                                  Retirement Contributions
                                </option>
                                <option value="Dividends">Dividends</option>
                                <option value="Royalties">Royalties</option>
                                <option value="Other Income">
                                  Other Income
                                </option>
                                <option value="Other Expenses">
                                  Other Expenses
                                </option>
                              </optgroup>
                              {/* Business & Professional */}
                              <optgroup label="Business & Professional">
                                <option value="Business Expenses">
                                  Business Expenses
                                </option>
                                <option value="Business Income">
                                  Business Income
                                </option>
                                <option value="Professional Services">
                                  Professional Services
                                </option>
                                <option value="Office Supplies">
                                  Office Supplies
                                </option>
                                <option value="Marketing & Advertising">
                                  Marketing &amp; Advertising
                                </option>
                                <option value="Software & Subscriptions">
                                  Software &amp; Subscriptions
                                </option>
                                <option value="Legal Fees">Legal Fees</option>
                                <option value="Consulting Fees">
                                  Consulting Fees
                                </option>
                              </optgroup>
                              {/* Leisure & Lifestyle */}
                              <optgroup label="Leisure & Lifestyle">
                                <option value="Hobbies & Crafts">
                                  Hobbies &amp; Crafts
                                </option>
                                <option value="Sports & Recreation">
                                  Sports &amp; Recreation
                                </option>
                                <option value="Books & Magazines">
                                  Books &amp; Magazines
                                </option>
                                <option value="Music & Instruments">
                                  Music &amp; Instruments
                                </option>
                                <option value="Movies & Streaming">
                                  Movies &amp; Streaming
                                </option>
                                <option value="Concerts & Events">
                                  Concerts &amp; Events
                                </option>
                                <option value="Video Games">Video Games</option>
                                <option value="Outdoor Activities">
                                  Outdoor Activities
                                </option>
                                <option value="Others">Others</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                        {/* Transaction */}
                        <div className="col-md-4">
                          <label className="form-label">Transaction</label>
                          <select
                            className="form-select"
                            name="transaction"
                            aria-label="Default select example"
                          >
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        {/* Date */}
                        <div className="col-md-6">
                          <label htmlFor="inputDate" className="form-label">
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            className="form-control"
                            id="inputDate"
                          />
                        </div>
                        {/* Account */}
                        <div className="col-md-6">
                          <label className="form-label">Account</label>
                          <select
                            className="form-select"
                            name="account"
                            aria-label="Default select example"
                          >
                            <option value="Cash">Cash</option>
                            <option value="Credit">Credit</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            name="description"
                            id="description"
                            style={{ height: 100 }}
                            maxLength={150}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="text-end">
                        <button
                          type="submit"
                          name="add_record"
                          className="btn btn-success"
                        >
                          <i className="bi bi-plus-lg" /> Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* end of add new record modal */}
            {/* Edit Record Modal */}
            <div
              className="modal fade"
              id="editRecordModal"
              tabIndex={-1}
              aria-labelledby="editRecordModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6 className="modal-title" id="editRecordModalLabel">
                      Edit Record
                    </h6>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form
                      id="editRecordForm"
                      action="../controller/transactionUpdate&DeleteRecord.php"
                      method="POST"
                    >
                      {/* Hidden ID field */}
                      <input
                        type="hidden"
                        name="transaction_id"
                        id="editTransactionId"
                      />
                      <div className="row mb-3">
                        {/* Amount */}
                        <div className="col-md-4">
                          <label
                            htmlFor="editInputNumber"
                            className="form-label"
                          >
                            Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="amount"
                            id="editInputNumber"
                            min={0}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Category</label>
                          <div
                            style={{
                              border: "1px solid #ced4da",
                              borderRadius: "0.375rem",
                            }}
                          >
                            <select
                              className="form-select"
                              name="category"
                              id="editCategory"
                              aria-label="Default select example"
                              style={{
                                width: "100%",
                                border: "none",
                                maxHeight: 200,
                                overflowY: "auto",
                              }}
                            >
                              {/* Daily Expenses */}
                              <optgroup label="Daily Expenses">
                                <option value="Food and Drinks">
                                  Food and Drinks
                                </option>
                                <option value="Shopping">Shopping</option>
                                <option value="House Rent">House Rent</option>
                                <option value="Transportation">
                                  Transportation
                                </option>
                                <option value="Health & Medical">
                                  Health &amp; Medical
                                </option>
                                <option value="Education">Education</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Personal Care">
                                  Personal Care
                                </option>
                                <option value="Entertainment">
                                  Entertainment
                                </option>
                                <option value="Dining Out">Dining Out</option>
                                <option value="Travel">Travel</option>
                                <option value="Clothing & Accessories">
                                  Clothing &amp; Accessories
                                </option>
                                <option value="Childcare">Childcare</option>
                                <option value="Pet Care">Pet Care</option>
                                <option value="Subscriptions & Memberships">
                                  Subscriptions &amp; Memberships
                                </option>
                              </optgroup>
                              {/* Assets */}
                              <optgroup label="Assets">
                                <option value="Vehicle">Vehicle</option>
                                <option value="Life and Entertainment">
                                  Life and Entertainment
                                </option>
                                <option value="Communication & PC">
                                  Communication &amp; PC
                                </option>
                                <option value="Home">Home</option>
                                <option value="Furniture & Appliances">
                                  Furniture &amp; Appliances
                                </option>
                                <option value="Electronics">Electronics</option>
                                <option value="Jewelry & Luxury Items">
                                  Jewelry &amp; Luxury Items
                                </option>
                                <option value="Art & Collectibles">
                                  Art &amp; Collectibles
                                </option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Vehicles & Boats">
                                  Vehicles &amp; Boats
                                </option>
                              </optgroup>
                              {/* Financial */}
                              <optgroup label="Financial">
                                <option value="Financial Expenses">
                                  Financial Expenses
                                </option>
                                <option value="Investments">Investments</option>
                                <option value="Income">Income</option>
                                <option value="Savings">Savings</option>
                                <option value="Debt Payments">
                                  Debt Payments
                                </option>
                                <option value="Taxes">Taxes</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Gifts & Donations">
                                  Gifts &amp; Donations
                                </option>
                                <option value="Loan Payments">
                                  Loan Payments
                                </option>
                                <option value="Bank Fees">Bank Fees</option>
                                <option value="Retirement Contributions">
                                  Retirement Contributions
                                </option>
                                <option value="Dividends">Dividends</option>
                                <option value="Royalties">Royalties</option>
                                <option value="Other Income">
                                  Other Income
                                </option>
                                <option value="Other Expenses">
                                  Other Expenses
                                </option>
                              </optgroup>
                              {/* Business & Professional */}
                              <optgroup label="Business & Professional">
                                <option value="Business Expenses">
                                  Business Expenses
                                </option>
                                <option value="Business Income">
                                  Business Income
                                </option>
                                <option value="Professional Services">
                                  Professional Services
                                </option>
                                <option value="Office Supplies">
                                  Office Supplies
                                </option>
                                <option value="Marketing & Advertising">
                                  Marketing &amp; Advertising
                                </option>
                                <option value="Software & Subscriptions">
                                  Software &amp; Subscriptions
                                </option>
                                <option value="Legal Fees">Legal Fees</option>
                                <option value="Consulting Fees">
                                  Consulting Fees
                                </option>
                              </optgroup>
                              {/* Leisure & Lifestyle */}
                              <optgroup label="Leisure & Lifestyle">
                                <option value="Hobbies & Crafts">
                                  Hobbies &amp; Crafts
                                </option>
                                <option value="Sports & Recreation">
                                  Sports &amp; Recreation
                                </option>
                                <option value="Books & Magazines">
                                  Books &amp; Magazines
                                </option>
                                <option value="Music & Instruments">
                                  Music &amp; Instruments
                                </option>
                                <option value="Movies & Streaming">
                                  Movies &amp; Streaming
                                </option>
                                <option value="Concerts & Events">
                                  Concerts &amp; Events
                                </option>
                                <option value="Video Games">Video Games</option>
                                <option value="Outdoor Activities">
                                  Outdoor Activities
                                </option>
                                <option value="Others">Others</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                        {/* Transaction */}
                        <div className="col-md-4">
                          <label className="form-label">Transaction</label>
                          <select
                            className="form-select"
                            name="transaction"
                            id="editTransaction"
                            aria-label="Default select example"
                          >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        {/* Date */}
                        <div className="col-md-6">
                          <label htmlFor="editInputDate" className="form-label">
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            className="form-control"
                            id="editInputDate"
                          />
                        </div>
                        {/* Account */}
                        <div className="col-md-6">
                          <label className="form-label">Account</label>
                          <select
                            className="form-select"
                            name="account"
                            id="editAccount"
                            aria-label="Default select example"
                          >
                            <option value="cash">Cash</option>
                            <option value="credit">Credit</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12">
                          <label
                            htmlFor="editDescription"
                            className="form-label"
                          >
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            name="description"
                            id="editDescription"
                            style={{ height: 100 }}
                            maxLength={150}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="text-end">
                        {/* Delete Button */}
                        <button
                          type="button"
                          name="delete"
                          className="btn btn-danger delete-btn"
                          id="deleteTransactionBtn"
                        >
                          <i className="bi bi-trash" /> Delete
                        </button>
                        {/* Update Button */}
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-primary"
                        >
                          <i className="bi bi-pencil" /> Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Edit Record Modal */}

            <Transactions />
            <Reminders />
          </div>
        </div>
      </section>
    </main>
  );
}
