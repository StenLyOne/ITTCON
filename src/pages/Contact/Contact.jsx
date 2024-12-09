import React, { useState } from "react";
import axios from "axios";
import style from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "../../components/button/Button";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    problems: "",
    about: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Очистка ошибки при изменении поля
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Work Email is required.";
    if (!formData.country) newErrors.country = "Country is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Отправка данных на ваш сервер
        const response = await axios.post("https://serverittcon.onrender.com/api/contacts", formData);
        setIsSubmitted(true);
        console.log("Данные успешно отправлены на сервер:", response.data);
      } catch (error) {
        console.error("Ошибка при отправке данных на сервер:", error);
      }
    }
  };;

  return (
    <div>
      <section className={style.damper}>
        <div></div>
      </section>
      <Header />
      <div className={`white-bg ${style.contactContainer}`}>
        <div className={style.contactText}>
          <h1 className="black-color">Get in touch</h1>
        </div>
        <div className={style.contactFormWraper}>
          <div>
            <p className="black-color">
              If you have any questions or you'd like to find out more about our
              services, <br />
              please get in touch.
            </p>
          </div>
          {isSubmitted ? (
            <p className="black-color success-message">
              Thank you! Your form has been submitted.
            </p>
          ) : (
            <form className={style.contactForm} onSubmit={handleSubmit}>
              <div className={style.formRow}>
                <div className={`${style.formGroup} ${style.formGroupShort}`}>
                  <label className="black-color">First name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <div className={style.error}>{errors.firstName}</div>
                  )}
                </div>
                <div className={`${style.formGroup} ${style.formGroupShort}`}>
                  <label className="black-color">Last name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <div className={style.error}>{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className={style.formGroup}>
                <label className="black-color">Work Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className={style.error}>{errors.email}</div>
                )}
              </div>
              <div className={style.formGroup}>
                <label className="black-color">Country*</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
                {errors.country && (
                  <div className={style.error}>{errors.country}</div>
                )}
              </div>
              <div className={style.formGroup}>
                <label className="black-color">
                  What problems are you looking to solve?
                </label>
                <textarea
                  rows="2"
                  name="problems"
                  value={formData.problems}
                  onChange={handleChange}
                />
              </div>
              <div className={style.formGroup}>
                <label className="black-color">
                  Please tell us a bit about you
                </label>
                <textarea
                  rows="2"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>
              <div className={style.buttonContainer}>
                <Button text="submit" />
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
