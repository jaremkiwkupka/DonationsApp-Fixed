import { Decor } from "../../CommonElements/Decor/Decor";
import { Formik } from 'formik';
import "./ContactMobile.scss";

export const ContactMobile = () => {
    return (
        <section className="contact">
            <div className="mobile-contact-form-container">
                <h2 className="header">Skontaktuj się z nami</h2>
                <Decor />
                <div className="contact-form-content">
                    <Formik
                        initialValues={{ name: "", email: "", message: "" }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'wpisz email';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'niepoprawny adres email';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-details">
                                    <div className="contact-form-name">
                                        <label className="contact-form-label">
                                            Wpisz swóje imię
                                        </label>
                                        <input
                                            type="name"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className="contact-form-input"
                                            placeholder="Krzysztof"
                                        />
                                        {errors.name && touched.name && errors.name}
                                    </div>
                                    <div className="contact-form-email">
                                        <label className="contact-form-label">
                                            Wpisz swoje email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className="contact-form-input"
                                            placeholder="abc@xyz.pl"
                                        />
                                        {errors.email && touched.email && errors.email}
                                    </div>
                                </div>
                                <label className="contact-form-label">
                                    Wpisz swoją wiadomość
                                </label>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="contact-form-input contact-form-textarea"
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                />
                                {errors.message && touched.message && errors.message}
                                <button type="submit" disabled={isSubmitting} className="contact-form-submit">
                                    Wyślij
                                </button>
                            </form>
                        )}
                    </Formik>
                    {/*<div className="mobile-contact-background">*/}
                    {/*    <img src={image} alt="background" />*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}