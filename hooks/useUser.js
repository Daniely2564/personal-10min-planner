import { useState } from "react";

export const useUser = async () => {
  const res = await fetch("/api/user");
  const data = await res.json();
  console.log(data);
};

export const useSignIn = () => {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [form, setForm] = useState(initialForm);
  const [payload, setPayload] = useState({ loading: false, error: "" });

  const onInputChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setPayload({ error: "", loading: true });
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Header": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setPayload({ error: "", loading: false });
    } catch (err) {
      setPayload({ error: err.message, loading: false });
    }
  };

  return [form, onInputChange, onFormSubmit, payload];
};
