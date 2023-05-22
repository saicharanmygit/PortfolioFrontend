import React from "react";

const AssetAllocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <form className="f">
        {/* {" "} */}
        <>
          <div className="form-row">
            <label htmlFor="phone">Theme Name</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Investment Horizon</label>
            <input
              type="tel"
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="address">risk</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Commodities:</label>
            <input
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">equities:</label>
            <input
              id="equi"
              name="equi"
              value={formData.equi}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="risk">bonds</label>
            <input
              type="text"
              id="risk"
              name="risk"
              value={formData.risk}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <button type="submit">Save</button>
          </div>
        </>
      </form>
    </div>
  );
};

export default AssetAllocation;
