function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About Page
        </h1>

        <p className="text-gray-600 text-lg">
          Welcome to our About Page
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;