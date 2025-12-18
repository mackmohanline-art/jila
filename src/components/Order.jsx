import React from "react";
import {
  FaHome,
  FaCar,
  FaUser,
  FaCreditCard,
  FaBusinessTime,
  FaGraduationCap,
} from "react-icons/fa";

function Profile() {
  // ✅ Google Form Link
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSc0f6Ozec6Py8zKFbEJ39C8AHMbk0efBqk0tB-gzPi0HjF0oA/viewform?usp=publish-editor";

  // Loan Types
  const loanTypes = [
    {
      id: "personal",
      name: "Personal Loan",
      icon: <FaUser className="text-3xl" />,
      amount: "Up to ₹25,00,000",
      interest: "8% p.a.",
      tenure: "Up to 5 years",
      description:
        "For all your personal needs - travel, medical, wedding, or any emergency",
    },
    {
      id: "home",
      name: "Home Loan",
      icon: <FaHome className="text-3xl" />,
      amount: "Up to ₹50,00,000",
      interest: "6.5% p.a.",
      tenure: "Up to 20 years",
      description:
        "Buy your dream home with flexible repayment options",
    },
    {
      id: "vehicle",
      name: "Vehicle Loan",
      icon: <FaCar className="text-3xl" />,
      amount: "Up to ₹20,00,000",
      interest: "5.5% p.a.",
      tenure: "Up to 7 years",
      description:
        "Get your dream car or bike with easy EMI options",
    },
    {
      id: "business",
      name: "Business Loan",
      icon: <FaBusinessTime className="text-3xl" />,
      amount: "Up to ₹1,00,00,000",
      interest: "8.5% p.a.",
      tenure: "Up to 10 years",
      description:
        "Expand your business with customized loan solutions",
    },
    {
      id: "education",
      name: "Education Loan",
      icon: <FaGraduationCap className="text-3xl" />,
      amount: "Up to ₹25,00,000",
      interest: "4% p.a.",
      tenure: "Up to 15 years",
      description:
        "Invest in your education with moratorium period",
    },
    {
      id: "credit-card",
      name: "Credit Card",
      icon: <FaCreditCard className="text-3xl" />,
      amount: "Up to ₹15,00,000",
      interest: "3.5% per month",
      tenure: "Flexible",
      description:
        "Premium credit cards with exciting rewards and benefits",
    },
  ];

  // ✅ Redirect Function
  const handleApply = (loan) => {
    // Optional: pass loan name to form
    const redirectUrl = `${GOOGLE_FORM_URL}&loanType=${encodeURIComponent(
      loan.name
    )}`;

    window.open(redirectUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-blue-900">
          Apply for Loan
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Choose from our wide range of loan products designed for your needs
        </p>

        {/* Loan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan) => (
            <div
              key={loan.id}
              className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600">{loan.icon}</div>
                <h2 className="text-xl font-bold text-gray-800">
                  {loan.name}
                </h2>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-green-600">
                    {loan.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest:</span>
                  <span className="font-semibold text-blue-600">
                    {loan.interest}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span className="font-semibold text-purple-600">
                    {loan.tenure}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {loan.description}
              </p>

              <div className="text-center">
                <button
                  onClick={() => handleApply(loan)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;




