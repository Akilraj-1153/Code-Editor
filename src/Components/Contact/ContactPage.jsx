import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ExternalLink } from "react-external-link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { imagedb } from "../../API/firebaseAPI";

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendEmail = async (data, e) => {
    setIsSubmitting(true);

    let fileUrl = "";

    if (data.image && data.image[0]) {
      const file = data.image[0];
      const storageRef = ref(imagedb, `/images/${data.user_email}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      fileUrl = await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress monitoring
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error("Upload error:", error);
            toast.error("Error uploading image.");
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    }

    try {
      const result = await emailjs.send(
        "service_xj8hxyc", // replace with your service ID
        "template_j6xfe9f", // replace with your template ID
        {
          user_name: data.user_name,
          user_email: data.user_email,
          message: data.message,
          file_url: fileUrl, // Send the file URL instead of the file itself
        },
        "9ZIOB5GrK4KOMXko2" // replace with your public key
      );
      toast.success("Message sent!");
      console.log(result.text);
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      console.error(error.text);
    }

    setIsSubmitting(false);
    e.target.reset();
    reset();
  };

  return (
    <div className="xs:px-2 md:px-5 lg:px-10 font-mono h-full w-full">
      <div className="bg-white h-full w-full justify-center items-center flex flex-col">
        <div className="contacttext p-3">
          <h2 className="text-2xl font-mateSc font-bold">Contact me in</h2>
        </div>
        <div className="flex flex-row gap-10 p-2">
          <button className="contacticon">
            <ExternalLink href="https://www.linkedin.com/in/akilrajn1153">
              <FaLinkedinIn size={35} className="icon" />
            </ExternalLink>
          </button>
          <button className="contacticon">
            <ExternalLink href="https://github.com/Akilraj-1153">
              <FaGithub size={35} className="icon" />
            </ExternalLink>
          </button>
          <button className="contacticon">
            <ExternalLink href="https://instagram.com/iam_akil_20?igshid=YTQwZjQ0NmI0OA==">
              <RiInstagramFill size={35} className="icon" />
            </ExternalLink>
          </button>
          <button className="contacticon">
            <ExternalLink href="https://x.com/Akilraj1153?t=nclAtn7CQGL7vEhqIDB3pA&s=08">
              <FaTwitter size={35} className="icon" />
            </ExternalLink>
          </button>
        </div>

        <div className="form xs:w-[90%] md:w-[70%] lg:w-[70%] p-5 m-5 rounded-xl  bg-gradient-to-r from-slate-700 to-slate-900 text-white">
          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-2">
            <label className="namelabel">Name</label>
            <input
              className="p-2 nameip rounded-lg h-10 text-black font-sans outline-none"
              type="text"
              {...register("user_name")}
            />

            <label className="emaillabel">Email</label>
            <input
              className="p-2 emailip rounded-lg h-10 font-sans text-black outline-none"
              type="email"
              {...register("user_email", { required: true })}
            />
            {errors.user_email && <span className="error">Email is required</span>}

            <label className="textlabel">Message</label>
            <textarea
              className="p-2 textip rounded-lg font-sans h-20 text-black outline-none resize-none"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <span className="error">Message is required</span>}

            <label className="filelabel">Attach an Image</label>
            <input type="file" {...register("image")} />

            <input
              className="p-2 submitbtn rounded-lg h-10 bg-blue-500 mt-4 outline-none"
              type="submit"
              value="Send"
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactPage;
