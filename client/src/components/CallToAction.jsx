export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-tl-3xl rounded-br-3xl p-6 justify-center items-center m-14 mt-4 mb-4 shadow-md">
      {/* Image Section */}
      <div className="sm:w-1/3 mb-4 sm:mb-0">
        <img
          src="https://blog.verisign.com/wp-content/uploads/VRSN_CompanyBrandedEmail_BlogImage8_201712-670x446.png"
          alt="Subscription"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Form Section */}
      <div className="sm:w-2/3 sm:pl-6">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe to Our Weekly Newsletter
        </h2>
        <form
          action="https://getform.io/f/awngmkrb"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
