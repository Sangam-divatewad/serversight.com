import React from "react";
import Footer from "./Footer";

const Contact = (props) => {
  return (
    <>
    <div className="d-flex container">
      <div className={`container justify-content-start text-${props.textMode}`}>
        <h1 className="mt-5">Contact Us</h1>
        <p>
          As a reader of Tech Explorist, you can help us to improve upcoming
          articles by sending us your opinion & appraisal.
          <br />
          The main motive is to bring all news together with easily accessible
          and readable.
          <br />
          If you find any flaws or having some suggestions on our website, you
          can drop us a line.
          <br />
          E-mail us at{" "}
          <a target={"blank"} href="mailto:serversightc@gmail.com">
            serversightc@gmail.com
          </a>
        </p>
      
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
