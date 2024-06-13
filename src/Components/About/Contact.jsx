import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from "react-external-link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Resend } from 'resend';
import Email from "./Email";

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const resend = new Resend('re_SXoerXfK_7sMtCumDAzwL1TMj2HXKdVts');
  
    const sendEmail = async (data) => {
      setIsSubmitting(true);
      try {
          const response = await fetch('https://proxy-server-liq8sgnbr-akilraj-ns-projects.vercel.app/emails', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  from: data.user_email,
                  to: 'akillearn01@gmail.com',
                  subject: 'Hello World',
                  react: <Email url="https://google.com" />,
              })
          });
  
          if (response.ok) {
              toast.success("Email sent successfully!");
          } else {
              toast.error("Failed to send email.");
          }
      } catch (error) {
          toast.error("Failed to send email.");
      }
      setIsSubmitting(false);
  };
  

  return (
    <div className="xs:px-2 md:px-5 lg:px-10 font-mono h-full w-full">
      <div className="bg-white h-full w-full justify-center items-center flex flex-col">
        <div className="contacttext p-3">
          <h2 className="text-2xl font-mateSc font-bold">Contact me in</h2>
        </div>
        <div className=" flex flex-row gap-10 p-2">
          <button className="contacticon">
            <ExternalLink href="https://www.linkedin.com/in/akilrajn1153">
              <FaLinkedinIn size={35} className="icon" />
            </ExternalLink>
          </button>
          <button className="contacticon">
            <ExternalLink href="https://github.com/Akilraj-1153">
              <FaGithub size={35} className="icon"></FaGithub>
            </ExternalLink>
          </button>
          <button className="contacticon">
            <ExternalLink href="https://instagram.com/iam_akil_20?igshid=YTQwZjQ0NmI0OA==">
              <RiInstagramFill size={35} className="icon"></RiInstagramFill>
            </ExternalLink>
          </button>
          <button className="contacticon">
            <ExternalLink href="https://x.com/Akilraj1153?t=nclAtn7CQGL7vEhqIDB3pA&s=08">
              <FaXTwitter size={35} className="icon"></FaXTwitter>
            </ExternalLink>
          </button>
        </div>

        <div className="form xs:w-[90%] md:w-[70%] lg:w-[50%] p-5 m-5 rounded-xl bg-black text-white">
        <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-2">
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
    className="p-2 textip rounded-lg font-sans h-20 text-black outline-none"
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

export default Contact;
