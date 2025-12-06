import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaShieldAlt, FaClock, FaRupeeSign, FaArrowRight, FaStar, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTenure, setLoanTenure] = useState(12);

  const features = [
    { icon: <FaCheck />, text: "Quick Approval" },
    { icon: <FaShieldAlt />, text: "100% Secure" },
    { icon: <FaClock />, text: "Instant Disbursal" },
    { icon: <FaRupeeSign />, text: "Low Interest Rates" }
  ];

  const benefits = [
    "No hidden charges",
    "Flexible repayment options",
    "Minimal documentation",
    "No collateral required",
    "24/7 Customer support",
    "Online process"
  ];

  const testimonials = [
    { name: "Rahul Sharma", review: "Got my loan approved within 2 hours! Amazing service.", rating: 5 },
    { name: "Priya Patel", review: "Low interest rates and smooth process. Highly recommended!", rating: 5 },
    { name: "Amit Kumar", review: "Best personal loan experience. Documentation was simple.", rating: 4 }
  ];

  const calculateEMI = () => {
    const rate = 11.5 / 12 / 100; // Monthly interest rate
    const time = loanTenure;
    const emi = (loanAmount * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              WE ARE PROVIDING
              <br />
              <span className="text-yellow-300">Personal Loan</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              ARE YOU LOOKING FOR <span className="font-semibold">PERSONAL LOANS?</span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            >
              Get instant and secure loans without complicated requirements
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-yellow-300 transition-colors"
              >
                <Link to="/order" className="flex items-center">
                  Apply Now <FaArrowRight className="ml-2" />
                </Link>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Calculate Your EMI
              </h2>
              <p className="text-gray-600 text-lg">
                Use our EMI calculator to plan your loan repayment
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Loan Amount: ₹{loanAmount.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm mt-1">
                      <span>₹10,000</span>
                      <span>₹5,00,000</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Tenure: {loanTenure} months
                    </label>
                    <input
                      type="range"
                      min="6"
                      max="60"
                      step="6"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm mt-1">
                      <span>6 months</span>
                      <span>60 months</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 text-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Your EMI Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Loan Amount:</span>
                      <span className="font-semibold">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tenure:</span>
                      <span className="font-semibold">{loanTenure} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Interest Rate:</span>
                      <span className="font-semibold">11.5% p.a.</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Monthly EMI:</span>
                        <span className="text-blue-600">₹{calculateEMI().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Personal Loans?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the best in class personal loan services with transparent process and quick approval
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 text-2xl mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {feature.text}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Loan Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-blue-100 text-lg">
              Read experiences from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <FaUser />
                  </div>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Personal Loan?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have achieved their financial goals with our personal loans
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              <Link to="/order" className="flex items-center justify-center">
                Apply Now - It's Free!
              </Link>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;