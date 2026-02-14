// import { useState } from "react";

// export function useWeb3Form(formType: string) {
//   const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

//   const submitForm = async (form: HTMLFormElement) => {
//     setStatus("sending");

//     const formData = new FormData(form);

//     // 🔴 YOUR API KEY
//     formData.append("access_key", "453a0698-b3b3-4355-908d-8b67dc01a25d");

//     formData.append("subject", `${formType} Inquiry`);
//     formData.append("from_name", "DreamsGuider Website");

//     try {
//     // ✅ Tag the inquiry source
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("success");
//         form.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return { status, submitForm };
// }
import { useState } from "react";

export function useWeb3Form(formType: string) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const submitForm = async (form: HTMLFormElement) => {
    setStatus("sending");

    const formData = new FormData(form);

    // Web3Forms public key
    formData.append(
      "access_key",
      "453a0698-b3b3-4355-908d-8b67dc01a25d"
    );

    formData.append("subject", `${formType} Inquiry`);
    formData.append("from_name", "DreamsGuider Website");

    // basic spam protection
    formData.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return { status, submitForm };
}
