import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const SendEmail = async ({
  fullname,
  email,
  phoneNumber,
  message,
  toast,
  responseCallback,
  setButtonLoading,
}) => {
  setButtonLoading(true);
  try {
    const datas = { fullname, email, phoneNumber, message };
    console.log(datas);
    let response = await axios.post(`${apiUrl}/api`, datas);

    // Check if the response is defined and has a 'data' property
    if (response && response.data) {
      console.log("Response:", response.data.msg);

      toast.success(`${response.data.msg} check your inbox mails`, {
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
