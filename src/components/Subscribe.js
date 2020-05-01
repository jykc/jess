import React, { useState } from 'react';
import axios from "axios";

const MyForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/2a24ba85-11ca-4b8a-9bf3-4bdcf424b823",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
      <section id="signup" className="signup-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">I would love to hear from you, send me a message!</h2>
              <form className="form-horizontal" onSubmit={handleOnSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="Name"
                  placeholder="Enter name..."
                  required="required"
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="Email"
                  placeholder="Enter email address..."
                  required="required"
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  id="message"
                  placeholder="Message detail"
                  required="required"
                  rows="4"
                  ></textarea>
              </div>
                <ul  className="actions" style={{ marginTop: 30 }}>
                  <li>
                      <input type="submit" className="btn btn-primary mx-auto" disabled={serverState.submitting} value="Send Message" />
                      {serverState.status && (
                          <p className={!serverState.status.ok ? "errorMsg" : ""}>
                          {serverState.status.msg}
                          </p>
              )}
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
    );

  };
    
  export default MyForm; 
