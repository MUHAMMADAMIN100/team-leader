import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Detail() {
  return (
    <>
    <div className="title-details-box">
      <h1 className="title-details">
        How we perform long-running tasks using AWS services
      </h1>
      <div className="portfolio">
        <div className="profolio-top">
          <div className="profolio-top-left">
            <img src="../../../src/pages/detail-page/images/Renee.svg" alt="" />
            <div className="profolio-top-left-text">
              <h4>Renne Wells</h4>
              <p>Product Designer, Quotient</p>
            </div>
          </div>
          <p>10 min read November 10, 2023</p>
        </div>
        <img
          src="../../../src/pages/detail-page/images/renne-design.svg"
          alt=""
        />
      </div>
      <div className="text-detail">
        <p>
          Depending on the input, this can result in using a lot of processing
          power and time. The whole process would take approximately 5 seconds
          to return a result to the client. Keep in mind we’re talking about 1
          item, a contact from a contact book. After a while, a new requirement
          is added. Solution must support companies that manage their contacts
          organized in files. We agreed to develop a web application that would
          support upload of dataset files, like .csv. The new web application
          should support third party integrations. Some of them are the ESP/CRM
          services, like Mailchimp. User does not need to see the result
          immediately. System can later notify the user about the result, when
          the process finishes. This information is the key that we need to
          leverage on when developing our solution. So here’s how we did it.
        </p>
      </div>
      <h1>Initial approach</h1>
      <div className="text-detail">
        <p>
          Our initial approach went like this: The web application would read a
          .csv file line-by-line and submit an array of entries to the backend
          REST API. Processing is in real time, immediately after the user makes
          a request for the process to start, he expects a result. Another
          approach is to apply vertical scaling to AWS architecture. Meaning we
          used larger, more expensive instances that have more RAM and
          processing power. This system worked well for smaller datasets, maybe
          up to 5k entries, but for larger datasets multiple problems arose.
          This solution is prone to failure due to long request time. Also,
          because of some 3rd party services that aren’t optimized for large
          scale loads or they don’t have batch endpoints. 3rd party services
          also tend to protect their architecture from making a huge bill on
          their end. The whole process was done in real-time. The request can
          take a lot of time hanging in there while the backend would do all the
          work and return the result to the client. The request was limited to
          300 seconds (at time of writing the article) before AWS would cancel
          it… Also I need to mention that the user has to wait a few minutes to
          see the results. They can’t use the app during the process, which
          makes for a bad user experience.
        </p>
      </div>
      <div className="author-detail">
        <img
          src="../../../src/pages/detail-page/images/renee gilr.svg"
          alt=""
        />
        <div className="author-detail-left">
          <div className="social-media-detail">
            <FontAwesomeIcon style={{backgroundColor: "gainsboro",  padding: "8px", borderRadius: "50%"}} icon={faFacebook} size="1x" />
            <FontAwesomeIcon style={{backgroundColor: "gainsboro",  padding: "8px", borderRadius: "50%"}} icon={faTwitter} size="1x" />
            <FontAwesomeIcon style={{backgroundColor: "gainsboro",  padding: "8px", borderRadius: "50%"}} icon={faLinkedin} size="1x" />
            <FontAwesomeIcon style={{backgroundColor: "gainsboro",  padding: "8px", borderRadius: "50%"}} icon={faInstagram} size="1x" />
            <p>Share this article</p>
          </div>
          <p className="main-color"> Written by</p>
          <h1>Renee Wells</h1>
          <p className="main-color">Product Designer, Quotient</p>
          <p>Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.</p>
        </div>
      </div>
      </div>
    </>
  );
}
