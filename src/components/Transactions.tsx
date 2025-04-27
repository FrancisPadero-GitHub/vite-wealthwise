import { useState } from "react";
import transactionsData from "../../transactionsData.json";

interface Transaction {
  Category: string;
  Description: string;
  Amount: number;
  Date: string;
  Type: string;
}

export default function Transactions() {
  const [filter, setFilter] = useState<"today" | "month" | "year" | "all_time">(
    "all_time"
  );

  const filterTransactions = (transaction: Transaction) => {
    const now = new Date();
    const transactionDate = new Date(transaction.Date);

    if (filter === "today") {
      return (
        transactionDate.getDate() === now.getDate() &&
        transactionDate.getMonth() === now.getMonth() &&
        transactionDate.getFullYear() === now.getFullYear()
      );
    }
    if (filter === "month") {
      return (
        transactionDate.getMonth() === now.getMonth() &&
        transactionDate.getFullYear() === now.getFullYear()
      );
    }
    if (filter === "year") {
      return transactionDate.getFullYear() === now.getFullYear();
    }
    return true; // All time
  };

  const filteredTransactions = transactionsData.filter(filterTransactions);

  return (
    <>
      {/* Transaction Records */}
      <div className="col-12" style={{ marginTop: 10 }}>
        <div className="card recent-sales overflow-auto">
          {/* Filter Section */}
          <div className="filter dropdown">
            <div className="icon" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots" />
            </div>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={() => setFilter("today")}
                >
                  Today
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={() => setFilter("month")}
                >
                  This Month
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={() => setFilter("year")}
                >
                  This Year
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={() => setFilter("all_time")}
                >
                  All Time
                </div>
              </li>
            </ul>
          </div>
          {/* End Filter Section */}
          <div className="card-body">
            <h5 className="card-title">
              Recent Transactions
              {filter === "today" && " | Today"}
              {filter === "month" && " | This Month"}
              {filter === "year" && " | This Year"}
              {filter === "all_time" && " | All Time"}
            </h5>
            <p>
              Quick Overview of your recent transactions. Click the 3 dots on
              the upper right side to filter dates.
            </p>
            <div style={{ maxHeight: 400, overflowY: "auto" }}>
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction, index) => (
                      <tr
                        className="transaction-row"
                        key={index}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{transaction.Category}</td>
                        <td>{transaction.Description}</td>
                        <td>
                          <span
                            className={`fw-bold ${
                              transaction.Type === "expense"
                                ? "text-danger"
                                : "text-success"
                            }`}
                          >
                            {transaction.Amount.toFixed(2)}
                          </span>
                        </td>
                        <td>{transaction.Date}</td>
                        <td className="text-center">
                          <span
                            className={`badge ${
                              transaction.Type === "expense"
                                ? "bg-danger"
                                : transaction.Type === "income"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {transaction.Type}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center">
                        No transactions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* End of Transaction Records */}
    </>
  );
}
