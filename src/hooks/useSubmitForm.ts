import { useEffect, useState } from "react";
import { sendEmail } from "../services/email";
import { Inputs } from "../types/FormSubscribe";

export const useSubmitForm = () => {
  const [message, setMessage] = useState({ value: "", type: "" });

  const submitForm = async (data: Inputs) => {
    setMessage({ value: "Submitting...", type: "info" });
    try {
      await sendEmail(data);
      setMessage({ value: "Email sent successfully!", type: "success" });
    } catch (error) {
      setMessage({ value: "An error occurred.", type: "error" });
    }
  };

  useEffect(() => {
    if (
      message.value == "Email sent successfully!" ||
      message.value == "An error occurred."
    ) {
      setTimeout(() => {
        setMessage({ value: "", type: "" });
      }, 5000);
    }
  }, [message]);

  return { submitForm, message };
};
