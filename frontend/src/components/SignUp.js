import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postDetails = (pics) => {
    if (!pics) {
      toast.error("Please select an image!");
      return;
    }
    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      toast.error("Please select a valid image (JPEG or PNG)!");
      return;
    }

    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chathub"); // Replace with your Cloudinary upload preset
    data.append("cloud_name", "duvvl9zhr"); // Replace with your Cloudinary cloud name

    fetch("https://api.cloudinary.com/v1_1/duvvl9zhr/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({ ...formData, profileImage: data.url.toString() });
        setLoading(false);
        toast.success("Image uploaded successfully!");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Image upload failed!");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      postDetails(file);
    } else {
      // If no file is selected, set profileImage to null (to use default image)
      setFormData({ ...formData, profileImage: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true); // Set loading state to true
    console.log("Form Data:", formData);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { name, email, password, profileImage } = formData;
      const postData = profileImage
        ? { name, email, password, profileImage }
        : { name, email, password };

      const { data } = await axios.post("/api/user", postData, config);

      toast.success("Registration is successful");
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast.error("An error occurred!");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-10 rounded shadow-lg w-full max-w-2xl"
    >
      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div>
        <label className="block mb-1">Confirm Password:</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-2"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div>
        <label className="block mb-1">Profile Image:</label>
        <input
          type="file"
          name="profileImage"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
        disabled={loading} // Disable the button when loading
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default Signup;
