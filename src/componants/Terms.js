import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Terms = (props) => {
  return (
    <>
    <div className="d-flex container">
      <div className={`container justify-content-start text-${props.textMode}`}>
        <h1 className="mt-5">Terms of Use</h1>
        <p>Welcome to serversight.com</p>
        <p>
          You will agree to accept all the terms when you use, access, or browse
          the site. If you do not agree to be legally bound by all the following
          conditions, please do not access and/or use the service. We have the
          right to change these terms or the content or design or user
          interfaces of the Site at any time. Kindly check these terms regularly
          as any modifications are effective immediately upon posting to the
          site.
        </p>
        <h2 className="mt-2">
          You will be considered to have read and accepted all the T&C.
        </h2>
        <h4 className="mt-2">Permitted Use</h4>
        <p>
          The site or any content belongs to it, including the trademark,
          software, materials, and all information. Subject to these terms, you
          are supposed to use a limited, temporary, revocable, and non-exclusive
          license to access, browse, and use the Site. You can use the
          information for non-commercial use only.
        </p>
        <h4 className="mt-2">You may not:</h4>
        <p>
          <ol>
            <li>
              Download or print any Content or extracts systematically or
              regularly or otherwise to create a database in electronic or paper
              form comprising all or part of the Content from the Site; nor
            </li>
            <li>
              Reproduce, republish, modify, archive, distribute, store, archive,
              or commercially exploit the Content without our prior written
              consent;
            </li>
            <li>Modify or adapt or create derivative works of the Content;</li>
            <li>
              Utilize links to this website received as part of a paid-for media
              monitoring service;
            </li>
            <li>
              Copy or extract data from this website using robots, spiders,
              crawlers, or other automatic devices or any manual process used to
              extract or copy web content systematically.
            </li>
          </ol>
        </p>

        <p>
          All content Promoted from following official Websites with their
          consent:
          <br />
          <ul>
            <li className="nav-item">
              <Link
                to="https://www.hindustantimes.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.hindustantimes.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.news18.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.news18.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.koimoi.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.koimoi.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.indianexpress.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.indianexpress.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.techexplorist.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.techexplorist.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.economictimes.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.economictimes.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.aninews.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.aninews.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.iflscience.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.iflscience.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.icc-cricket.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.icc-cricket.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.usatoday.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.usatoday.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.livemint.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.livemint.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.brainberries.com"
                target={"blank"}
                className="nav-link px-2 text-muted"
              >
                www.brainberries.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.serversight.com"
                className=" nav-link px-2 py-2  "
              >
                <p className=" mb-0 text-info">
                  &copy; 2023 serversight.com, Inc
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                target={"blank"}
                to="mailto:serversightc@gmail.com"
                className=" nav-link px-2 py-2  "
              >
                <p className=" mb-0 text-primary">
                  Contact us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="ms-2 bi bi-envelope-at-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                  </svg>
                </p>
              </Link>
            </li>
          </ul>
        </p>
        <h3 className="mt-2">Limited Permission to Copy:</h3>
        <p>
          Serversight.com allows you to only access and makes personal use of
          the Site. You are not permitted to, directly or indirectly download or
          modify / alter / change / amend / vary / transform / revise /
          translate / copy / publish / distribute or otherwise disseminate any
          content on the site or any portion of it; or delete or fail to display
          any promotional taglines.
          <br />
          However, you may print or download extracts from these pages for your
          personal/individual, non-commercial use only. <br />
          No part of the Site may be reproduced or transmitted to or stored in
          any other website, nor may any of its pages or part thereof be
          disseminated in any electronic or non-electronic form without prior
          written permission.
        </p>
        <h3 className="mt-2">No Unlawful or Prohibited Use:</h3>
        <p>
          Continuing on the site, you agree that you will not use the Services
          for any unlawful or prohibited purpose by these terms, conditions, and
          notices. You are not supposed to use our service in any case that may
          damage, down, crash, or overburden the site’s server or its networks.
          <br />
          Unauthorized access via hacking, password mining, or any other means
          is strictly prohibited.
          <br />
          You shall not host, display, upload, modify, publish, transmit,
          update, or share any information on the Site.
        </p>
        <h3 className="mt-2">Removal of links from our website</h3>
        <p>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us at any moment. We will consider
          requests to remove links, but we are not obligated to or so or to
          respond to you directly.
          <br />
          We do not ensure that the information on this website is correct; we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          site is kept up to date.
        </p>
        <h3 className="mt-2">Kindly Note:</h3>
        <p>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
          <br /> <br /> --------------------------- Thank you !
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Terms;
