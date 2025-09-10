import "../assets/styles/form.css"; // your existing styles

const ServiceRequestForm = () => {
  return (
    <div className="service-form-container">
      <h2 className="form-title">Request a Service</h2>
      <form className="service-form">
        <label className="text-[#fff]">
          Name<span className="required">*</span>
          <input type="text" placeholder="Your Name" required />
        </label>

        <label className="text-[#fff]">
          Email<span className="required">*</span>
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label className="text-[#fff]">
          Type of Service<span className="required">*</span>
          <select required>
            <option value="">Select a service</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="ai">AI Training</option>
            <option value="testing">Testing</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </label>

        <label className="text-[#fff]">
          Details
          <textarea placeholder="Describe your project or request..." />
        </label>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
