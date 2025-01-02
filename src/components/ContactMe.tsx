import React, { useState } from "react";
import toast from "react-hot-toast";
import {Filter} from "bad-words";

// Utility function for profanity check
const filter = new Filter();
const checkProfanity = (input: string): boolean => filter.isProfane(input);

function ContactMe() {
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

  // Constants for messages
  const ERROR_MESSAGES = {
    EMPTY_FIELDS: "Please fill all fields.",
    BAD_WORDS: "Please don't use bad words.",
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormSubmitting(true);

    const formData = new FormData(event.target as HTMLFormElement);

    // Check for empty fields
    const isFieldEmpty = ["firstname", "lastname", "email", "message"].some(
      (field) => !formData.get(field)?.toString().trim()
    );

    if (isFieldEmpty) {
      toast.error(ERROR_MESSAGES.EMPTY_FIELDS);
      setIsFormSubmitting(false);
      return;
    }

    // Check for profanity in fields
    const hasProfanity = ["firstname", "lastname", "email", "message"].some(
      (field) => checkProfanity(formData.get(field)?.toString().trim() || "")
    );

    if (hasProfanity) {
      toast.error(ERROR_MESSAGES.BAD_WORDS);
      setIsFormSubmitting(false);
      return;
    }

    // Add access key and submit the form
    formData.append("access_key", import.meta.env.VITE_MAIL_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted!");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Submission Error:", error);
    }

    setIsFormSubmitting(false);
  };

  return (
    <section
      className="bg-[#0A0A0A] py-12 flex items-center justify-center max-lg:px-4"
      id="contactMe"
    >
      <div className="max-w-[900px] w-full">
        <h2 className="text-2xl mb-3 pb-3">Contact Me</h2>
        <form className="w-full relative pb-12" onSubmit={onSubmit}>
          {/* Input fields */}
          <div className="grid grid-cols-2 place-items-center gap-8">
            {["firstname", "lastname"].map((field, index) => (
              <div key={index} className="w-full">
                <label htmlFor={field}>{field === "firstname" ? "First Name" : "Last Name"}</label>
                <br />
                <input
                  type="text"
                  id={field}
                  name={field}
                  placeholder={field === "firstname" ? "John" : "Doe"}
                  className="bg-[#0A0A0A] border-[#ffffff24] border-2 rounded-md w-full mt-2 p-2 placeholder:text-sm"
                />
              </div>
            ))}
          </div>

          <div className="w-full mt-2">
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="bg-[#0A0A0A] border-[#ffffff24] border-2 rounded-md w-full mt-2 p-2 placeholder:text-sm"
            />
          </div>

          <div className="w-full mt-2">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message here..."
              className="bg-[#0A0A0A] border-[#ffffff24] border-2 rounded-md w-full mt-2 p-2 placeholder:text-sm"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-white text-black text-md py-1 rounded-lg hover:bg-[#0A0A0A] hover:text-white border-[#ffffff24] border-2 transition-all ease-in-out cursor-pointer duration-300 mt-2 absolute right-1/2 translate-x-1/2 px-12 flex items-center gap-2 group"
            disabled={isFormSubmitting}
          >
            <p>{isFormSubmitting ? "Please wait..." : "Submit"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] transition-colors duration-300"
              viewBox="0 0 512 512"
            >
              <path
                className="fill-current text-black group-hover:text-white"
                d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
