function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">




      <div className="bg-[#131921] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-300 mt-2">
            We're here to help with your orders, products, and account.
          </p>
        </div>
      </div>





      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">



          <div className="lg:col-span-1 space-y-6">

            {/* Customer Service */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Customer Service
                  </h2>

                  <p className="text-gray-500 text-sm">
                    We're available 24/7
                  </p>
                </div>

              </div>

              <p className="text-gray-600 mt-5 text-sm leading-6">
                Need help with your order or account? Our customer
                service team is ready to assist you.
              </p>

              <p className="font-semibold text-gray-800 mt-4">
                +92 300 1234567
              </p>
            </div>




            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Email Support
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Get help via email
                  </p>
                </div>

              </div>

              <p className="text-gray-600 mt-5 text-sm">
                support@amazonstore.com
              </p>
            </div>


            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Our Location
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Visit our office
                  </p>
                </div>

              </div>

              <p className="text-gray-600 mt-5 text-sm leading-6">
                123 Main Street,<br />
                Lahore, Pakistan
              </p>
            </div>

          </div>





          <div className="lg:col-span-2">

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">

              <h2 className="text-2xl font-bold text-gray-800">
                How can we help?
              </h2>

              <p className="text-gray-500 mt-2 mb-8">
                Send us a message and our support team will get back
                to you as soon as possible.
              </p>


              <form className="space-y-6">

  
  
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>




                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>





                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>

                  <select
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option>Select a subject</option>
                    <option>Order Problem</option>
                    <option>Product Question</option>
                    <option>Payment Issue</option>
                    <option>Delivery Problem</option>
                    <option>Account Issue</option>
                    <option>Other</option>
                  </select>
                </div>


  
  

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none resize-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  ></textarea>
                </div>




                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#ff9900] hover:bg-[#e88b00] text-gray-900 font-bold px-8 py-3 rounded-md transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>




        <div className="mt-12">

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">
                Where is my order?
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                You can track your order from your account's order
                history and check its current delivery status.
              </p>
            </div>


            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">
                How can I return an item?
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                Go to your orders section, select the item and choose
                the return option to start the process.
              </p>
            </div>


            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">
                How can I contact support?
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                You can contact our support team by phone or email.
                We're always happy to help.
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER STRIP ================= */}
      <div className="bg-[#232f3e] text-white py-6 text-center">

        <p className="text-gray-300 text-sm">
          Need more help? Our customer service team is always here for you.
        </p>

        <p className="text-gray-400 text-xs mt-2">
          © 2026 Amazon Store. All rights reserved.
        </p>

      </div>

    </div>
  );
}

export default Contact;