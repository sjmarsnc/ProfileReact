import React from "react";
const styles = {
  body: {
    color: "midnightblue"
  },
  button: {
    color: "midnightblue",
    backgroundColor: "ghostwhite",
    borderRadius: "8px"
  }
};
const ContactForm = () => {
  return (
    <div class="card w-100 m-0 mt-2 p-3" style={styles.body} id="content">
      <div class="card-body ">
        <h2 class="ml-0 pl-0">Drop Me a Line!</h2>
        <div class="card-content">
          <form action="mailto:sjmarsnc@gmail.com">
            <div class="form-group form-check m-0 p-0">
              <label for="visitorName" class="mb-1">
                Your Name
              </label>
              <input
                type="text"
                class="form-control mb-1"
                id="visitorName"
                name="visitorName"
                required
              />
              <label for="visitorEmail" class="mb-1">
                Email Address
              </label>
              <input
                type="email"
                class="form-control mb-1"
                id="visitorEmail"
                required
              />
              <label for="visitorMessage" class="mb-1">
                Message
              </label>
              <textarea
                name="visitorMessage"
                class="form-control"
                rows="10"
              ></textarea>
              <button
                className="mt-3 p-2"
                type="submit"
                id="subButton"
                style={styles.button}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
