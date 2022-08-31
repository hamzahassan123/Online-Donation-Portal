import React, { Component } from "react";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      success: false,
    };
  }

  sendEmail(e) {
    emailjs
      .sendForm(
        "service_04o3w6v", //service id from email js
        "template_jkihub6", //template id from email js
        e.target,
        "aqsHXXqzc_Ngr7vVT" //public key of email js
      )
      .then((res) => {
        // alert("message sent successfully");
        this.setState(() => {
          return {
            success: true,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
    window.alert("do you want to proceed with this message");
  }

  render() {
    return (
      <div>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green">
                {
                  (this.state.success = true
                    ? "Message sent successfully!"
                    : " ")
                }
              </h1> */}

              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                If you have any issue or query you can contact us.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form className="flex flex-wrap -m-2" onSubmit={this.sendEmail}>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Ask your query..."
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    required
                  >
                    Send Message
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                  <p className="text-indigo-400">hamza.bsse3863@iiu.edu.pk</p>
                  <p className="leading-normal my-5">Phone : +92-349-4837337</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactForm;
