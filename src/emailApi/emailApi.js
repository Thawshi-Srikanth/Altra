import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const SendEmail = async ({
  name,
  email,
  phoneNumber,
  message,
  toast,
  responseCallback,
  setButtonLoading,
}) => {
  setButtonLoading(true);
  try {
    const datas = { email, phoneNumber, message, name };

    let response = await axios.post(`${apiUrl}/api`, datas);

    // Check if the response is defined and has a 'data' property
    if (response && response.data) {
      

      toast.success(`${response.data.msg} check your inbox mails or spam folder`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.error("Invalid response:", response);
    }
  } catch (error) {
    error && responseCallback(true);
    console.error("Error sending email:", error);

    toast.error("Failed to send email.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  setButtonLoading(false);
};
