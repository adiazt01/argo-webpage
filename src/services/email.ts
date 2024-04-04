import emailjs from "@emailjs/browser";
import { Inputs } from "../types/FormSubscribe";

export async function sendEmail(data: Inputs) {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      data,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
      }
    );
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}