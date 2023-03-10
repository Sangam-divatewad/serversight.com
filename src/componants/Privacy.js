import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Privacy = (props) => {
  return (
    <>
      <div className="d-flex container">
        <div
          className={`container justify-content-start text-${props.textMode}`}
        >
          <h1 className=" mt-5 ">Privacy Policy</h1>
          <p className=" container text-wrap ">
            This Privacy Policy governs your use of serversight.com and its
            network, including its website (serversight.com), any subdomains of
            the website, mobile site, app, and APIs. By accessing or using this
            Website, you agree to this Privacy Policy. Please review it
            carefully.
          </p>
          <h2 className="mt-2">What information do we collect ?</h2>
          <p>
            Whenever you visit our website, we may collect non-identifying
            information from you, such as your weblog data, your IP address,
            user agent, referring URL, browser, operating system, cookie
            information, and Internet Service Provider; operating system and
            device type; your location, and the language option you choose in
            your device. Without additional legal requests or records from a
            third party, this information alone cannot usually be used to
            identify you.
          </p>
          <h2 className="mt-2">Advertising...</h2>
          <p>
            This type of services allows User Data to be utilized for
            advertising communication purposes displayed in the form of banners
            and other advertisements on our Website, possibly based on user
            interests. This does not mean that all Personal Data are used for
            this purpose. Information and conditions of use are shown below.
            Some of the services listed below may use cookies to identify users,
            or they may use the behavioral retargeting technique, i.e.,
            displaying ads tailored to the user’s interests and behavior,
            including those detected outside our Website. For more information,
            please check the privacy policies of the relevant services.
            <span className="text-dark">Google AdSense (Google Inc.)</span>
            Google AdSense is an advertising service provided by Google Inc.
            This service uses the “DoubleClick” Cookie, which tracks the use of
            our Website and user behavior concerning ads, products, and services
            offered. Users may decide to disable all the DoubleClick Cookies by
            clicking on: google.com/settings/ads/onweb/optout. Personal Data
            processed: Cookies; Usage Data. Place of processing: United States –{" "}
            <Link to="https://policies.google.com/technologies/ads">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="https://myadcenter.google.com/?hl=en&sasb=true">
              Opt Out
            </Link>
            .
          </p>
          <h2 className=" mt-2">How do we use this information ?</h2>
          <p className="mt-2">
            Any of the information we collect from you may be used in one of the
            following ways:
            <ul>
              <li>
                <span className="text-success">
                  To personalize your experience:
                </span>{" "}
                Your information helps us to better respond to your individual
                needs.
              </li>
              <li>
                <span className="text-success">To improve our website:</span> We
                continually strive to improve our website offerings based on the
                information and feedback we receive from you.
              </li>
              <li>
                <span className="text-success">
                  To improve customer service:
                </span>{" "}
                Your information helps us to respond to your customer service
                requests and support needs more effectively.
              </li>
            </ul>
            Additionally, we use your personal information to improve our
            Services, provide you with a personalized experience on our sites,
            provide you with personalized advertising and marketing, and detect,
            prevent, mitigate, and investigate fraudulent or illegal activities.
            Throughout the provision of our Service to you, we may delegate our
            authority to collect, access, use, and disseminate your information.
            For this reason, you hereby agree that for every authorization which
            you grant to us in this Privacy Policy, you also give to any third
            party that we may hire, contract, or otherwise retain the services
            for operating, maintaining, repairing, or otherwise improving or
            preserving our website or its underlying files or systems. You also
            agree not to hold us liable for the actions of any of these third
            parties.
          </p>
          <h2 className="mt-2">Embedded content from other websites...</h2>
          <p>
            Articles on this site may include embedded content (e.g., videos,
            images, tweets articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website. These websites may collect data about you, use
            cookies, embed additional third-party tracking, and monitor your
            interaction with that embedded content, including tracking your
            interaction with the embedded content if you have an account and are
            logged in to that website. YouTube video (Google Inc.) YouTube is a
            video content visualization service provided by Google Inc. that
            allows our Website to incorporate content of this kind on its pages.
            Personal Data processed: Cookies; Usage Data. Place of processing:
            United States – Privacy Policy.
            <h2>Analytics...</h2>
            We use third-party tools for audience measurement on our websites.
            The services contained in this section enable us to monitor and
            analyze web traffic and can be used to keep track of user behavior.
            We do not combine the information collected through the use of these
            tools with personally identifiable information. Google Analytics
            (Google Inc.) Google Analytics is a web analysis service provided by
            Google Inc. (“Google”). Google utilizes the Data collected to track
            and examine the use of our Website, prepare reports on its
            activities, and share them with other Google services. Google may
            use the Data collected to contextualize and personalize the ads of
            its own advertising network. Personal Data processed: Cookies; Usage
            Data. Place of processing: United States – 
            <Link
              rel="preconnect"
              crossorigin="anonymous"
              to="https://policies.google.com/technologies/ads"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              rel="preconnect"
              crossorigin="anonymous"
              to="https://myadcenter.google.com/?hl=en&sasb=true"
            >
              Opt Out
            </Link>
            .
          </p>
          <h2>Who do we share your data with ?...</h2>
          serversight.com may share or release your information in response to a
          request from a government agency or a private litigant for legal
          purposes. You agree that we may disclose your information to a third
          party where we believe it is required to do so for a civil action,
          criminal investigation, or other legal matters. You release us from
          any damages that may arise from or relate to your information’s share
          or release to a request from law enforcement agencies or private
          litigants.
          <h2 className="mt-2">
            Do we disclose any information to outside parties?
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties. It does not include
            trusted third parties who assist us in operating our website,
            conducting our business, or servicing you, so long as those parties
            agree to keep this information confidential. However, non-personally
            identifiable visitor information may be provided to other parties
            for marketing, advertising, or other uses.
          </p>
          <h2 className="mt-2">Third-party links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We, therefore, have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, we seek to protect the integrity of our
            site and welcome any feedback about these sites.
          </p>
          <h2 className="mt-2">Online Privacy Policy only</h2>
          <p>
            This online privacy policy applies only to information collected
            through our website and not to information collected offline.
          </p>
          <h2 className="mt-2">The Rights of Users</h2>
          <p>
            Users may exercise certain rights regarding their Data processed by
            the Owner. In particular, Users have the right to do the following:
            <ul>
              <li>
                Withdraw their consent at any time. Users have the right to
                withdraw consent where they have previously given their consent
                to the processing of their Personal Data.
              </li>
              <li>
                Object to processing of their Data. Users have the right to
                object to the processing of their Data if the processing is
                carried out on a legal basis other than consent. Further details
                are provided in the dedicated section below.
              </li>
              <li>
                Access their Data. Users have the right to learn if Data is
                being processed by the Owner, obtain disclosure regarding
                certain aspects of the processing and obtain a copy of the Data
                undergoing processing.
              </li>
              <li>
                Verify and seek rectification. Users have the right to verify
                the accuracy of their Data and ask for it to be updated or
                corrected.
              </li>
              <li>
                Restrict the processing of their Data. Users have the right,
                under certain circumstances, to restrict the processing of their
                Data. In this case, the Owner will not process their Data for
                any purpose other than storing it.
              </li>
              <li>
                Have their Personal Data deleted or otherwise removed. Users
                have the right, under certain circumstances, to obtain the
                erasure of their Data from the Owner.
              </li>
              <li>
                Receive their Data and have it transferred to another
                controller. Users have the right to receive their Data in a
                structured, commonly used and machine-readable format and, if
                technically feasible, to have it transmitted to another
                controller without any hindrance. This provision is applicable
                provided that the Data is processed by automated means and that
                the processing is based on the User’s consent, on a contract
                which the User is part of, or on pre-contractual obligations
                thereof.
              </li>
              <li>
                Lodge a complaint. Users have the right to bring a claim before
                their competent data protection authority.
              </li>
            </ul>
          </p>
          <h2 className="mt-2">For International Users</h2>
          <p>
            Our site is worked from India. On the off chance that you are an
            international user visiting from different areas having laws
            administering data collection and use that may vary from the Indian
            law, please, note that you are transferring your own data to India,
            which doesn’t have similar data protection laws. By giving your own
            data you agree to the use of your own data for the use distinguished
            above as per this Privacy Policy.
          </p>
          <h2 className="mt-2">Your Consent</h2>
          <p>By using our site, you consent to our online privacy policy.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
