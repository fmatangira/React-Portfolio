export default function Contact() {

    return (
        <div className="container">
          <h1 className="contentHeading">Contact</h1>
          <hr className="contentDivide" />

          <form className="contactForm" action="index.html" method="post">

              <label className="contactName1" for="name">Name</label>
              <input className="contactName2" type="text" name="name" />

              <label className="contactEmail1" for="name">Email</label>
              <input className="contactEmail2" type="text" name="email" />

              <label className="contactMsg1" for="name">Message</label>
              <input className="contactMsg2" type="text" name="msg" />

              <button type="button" name="Submit">Submit</button>
          </form>
      </div>
    )
}