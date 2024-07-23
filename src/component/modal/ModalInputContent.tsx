import { SyntheticEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

export default function ModalInputContent() {
  const formRef = useRef<HTMLFormElement>(null);

  const style = { mt: 3, width: "100%", outline: "none" };
  const style2 = { mt: 5, width: "100%", outline: "none" };

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("메일이 성공적으로 전송되었습니다.");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("메일을 보내는데 실패하였습니다. 다시 시도해주십시오.");
          }
        );
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <Input
        isRequired={true}
        type="text"
        name="from_name"
        label="Name"
        placeholder="Insert your name"
        style={style2}
      />
      <Input
        isRequired={true}
        type="email"
        name="from_email"
        label="Email"
        placeholder="Insert your email"
        style={style}
        helperText="이메일 주소에 @를 포함해주세요."
      />
      <TextArea
        isRequired={true}
        name="message"
        label="Message"
        rows={4}
        placeholder="Insert your message here"
        style={style}
      />

      <input
        className="w-full p-3 mt-5 box-border bg-[#0dd189] text-[white] rounded-lg border-[1px] border-solid border-white hover:bg-[white] hover:border-[#0dd189] hover:text-[#0dd189] transition-color duration-500 cursor-pointer"
        type="submit"
        value="메일 전송하기"
      />
    </form>
  );
}
