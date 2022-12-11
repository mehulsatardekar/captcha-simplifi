import { toast } from "react-hot-toast";

const useToast = () => {
  const notifySuccess = (successMsg: string) =>
    toast(successMsg, {
      icon: "👏",
      duration: 5000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  const notifyError = (errorMsg: string) =>
    toast.error(errorMsg, {
      icon: "😭",
      duration: 5000,
      style: {
        borderRadius: "10px",
        background: "#F03A17",
        color: "#FFFFFF",
      },
    });

  return { notifySuccess, notifyError };
};

export { useToast };
