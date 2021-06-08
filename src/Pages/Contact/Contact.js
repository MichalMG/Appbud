import { useState } from "react";
import Section from "../../components/Section/Section"
import validation from "../../helpers/validation";
import emailjs from 'emailjs-com';
import HeaderPage from '../../components/Header/HeaderPage/HeaderPage.js';
import useWebTitle from "../../hooks/useWebTitle";

const Contact = () => {

  const setTitle = useWebTitle();
  setTitle("Kontakt");

  const [loading, setLoading] = useState(false);
  const [sendInfo, setSendInfo] = useState({
    message: '',
    color: 'warning'
  });
  const [form, setForm] = useState({
    name: {
      value: "",
      rules: ['required'],
      errorMessage: "",
      valid: false
    },
    surname: {
      value: "",
      rules: ['required'],
      errorMessage: "",
      valid: false
    },
    phone: {
      value: "",
      rules: ['required', 'phone'],
      errorMessage: "",
      valid: false
    },
    mail: {
      value: "",
      rules: ['required', 'email'],
      errorMessage: "",
      valid: false
    },
    text: {
      value: "",
      rules: ['required', { rule: 'length', length: 10 }],
      errorMessage: "",
      valid: false
    },
  })

  const disabledHandler = Object.values(form).filter(val => !val.valid).length === 0;

  const newMessageHandler = async (e) => {
    e.preventDefault();
    if (!disabledHandler) return setSendInfo({ ...sendInfo, message: "Wiadomość nie została wysłana, wypełnij poprawnie formularz", color: "danger" });

    setLoading(true);
    const messageForm = {
      name: form.name.value,
      surname: form.surname.value,
      reply_to: form.mail.value,
      message: form.text.value,
      phone: form.phone.value
    }

    try {
      const emailRes = await emailjs.send('service_f2z9ahd', 'template_6iawhu1', messageForm, 'user_cmCNSI8eUPnr8NHznf8hc');
      if (emailRes.status === 200) {
        setSendInfo({ ...sendInfo, message: "Wiadomość została wysłana", color: "success" });
      }
      setLoading(false);
      setForm({
        ...form,
        name: {
          ...form.name,
          value: "",
          valid: false
        },
        surname: {
          ...form.surname,
          value: "",
          valid: false
        },
        phone: {
          ...form.phone,
          value: "",
          valid: false
        },
        mail: {
          ...form.mail,
          value: '',
          valid: false
        },
        text: {
          ...form.text,
          value: "",
          valid: false
        }
      })
    } catch (err) {
      setSendInfo({ ...sendInfo, message: "Wystąpił błąd podczas wysyłania wiadomości", color: "danger" });
      setLoading(false);
    }
  }

  const formHandler = (val, type) => {
    const errorMessage = validation(val, form[type].rules);
    setForm({
      ...form,
      [type]: { ...form[type], value: val, errorMessage, valid: !errorMessage }
    })
  }

  return (
    <>
      <HeaderPage />
      <Section title="Kontakt" color="light">
        <div className="row justify-content-between">

          <div className="col-12 col-lg-6 align-items-stretch d-flex order-2 order-lg-1">
            <div className="card text-dark bg-light w-100">
              <div className="card-header text-warning bg-dark text-center fw-bold">Lokalizacja firmy</div>
              <div className="card-body p-0 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41062.683109837184!2d19.596408443332205!3d49.96602487945065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47168af5c4c11055%3A0xa4f8093011cef736!2s34-114%20Brze%C5%BAnica!5e0!3m2!1spl!2spl!4v1619441229235!5m2!1spl!2spl" style={{ border: '0', width: '100%', height: '100%', minHeight: '350px' }} title="companyLocalization" allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>


          <div className="col-12 col-lg-6 mb-4 mb-lg-0 align-items-stretch d-flex order-1 order-lg-2">

            <div className="card text-dark bg-light w-100 ">
              <div className="card-header text-center text-warning bg-dark fw-bold">Formularz kontaktowy</div>
              <div className="card-body align-items-center d-flex">
                <form onSubmit={newMessageHandler} className=" w-100">
                  <div className="mb-3">
                    <div className="row">

                      <div className="col-12 col-sm-6  mb-3 mb-sm-0">
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                          </span>
                          <input type="text" className={`form-control ${form.name.valid ? "is-valid" : ""} ${form.name.errorMessage ? "is-invalid" : ""}`} id="exampleFormControlInput1" placeholder="Imię" value={form.name.value} onChange={(e) => formHandler(e.target.value, "name")} />
                          <div className="invalid-feedback">
                            {form.name.errorMessage}
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                          </span>
                          <input type="text" className={`form-control ${form.surname.valid ? "is-valid" : ""} ${form.surname.errorMessage ? "is-invalid" : ""}`} id="exampleFormControlInput1" placeholder="Nazwisko" value={form.surname.value} onChange={(e) => formHandler(e.target.value, "surname")} />
                          <div className="invalid-feedback">
                            {form.surname.errorMessage}
                          </div>
                        </div>
                      </div>


                    </div>


                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                          </span>
                          <input type="text" className={`form-control ${form.phone.valid ? "is-valid" : ""} ${form.phone.errorMessage ? "is-invalid" : ""}`} id="exampleFormControlInput1" placeholder="+48 000 000 000" value={form.phone.value} onChange={(e) => formHandler(e.target.value.replace(/\s/g, ""), "phone")} />
                          <div className="invalid-feedback">
                            {form.phone.errorMessage}
                          </div>
                        </div>
                      </div>


                      <div className="col-12 col-sm-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                          </span>
                          <input type="email" className={`form-control ${form.mail.valid ? "is-valid" : ""} ${form.mail.errorMessage ? "is-invalid" : ""}`} id="exampleFormControlInput1" placeholder="name@example.com" value={form.mail.value} onChange={(e) => formHandler(e.target.value, "mail")} />
                          <div className="invalid-feedback">
                            {form.mail.errorMessage}
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Wiadomość</label>
                    <textarea className={`form-control ${form.text.valid ? "is-valid" : ""} ${form.text.errorMessage ? "is-invalid" : ""}`} id="exampleFormControlTextarea1" rows="4" value={form.text.value} onChange={(e) => formHandler(e.target.value, "text")}></textarea>
                    <div className="invalid-feedback">
                      {form.text.errorMessage}
                    </div>
                  </div>
                  {sendInfo.message && <div className={`alert alert-${sendInfo.color} mx-3 my-2 text-center`}>{sendInfo.message}</div>}
                  {loading
                    ? (
                      <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Loading...</span>
                        <span className="ms-2">Wysyłanie...</span>
                      </button>)
                    : (
                      <button className="btn btn-outline-success" type="submit" disabled={!disabledHandler}>Wyślij wiadomość</button>
                    )}

                </form>


              </div>
            </div>

          </div>


        </div>
      </Section>
    </>
  )
}

export default Contact;