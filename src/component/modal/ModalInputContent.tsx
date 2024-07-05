import { TextField } from "@mui/material";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

export default function ModalInputContent() {
  const style = { mt: 3, width: "100%", outline: "none" };
  const style2 = { mt: 5, width: "100%", outline: "none" };

  return (
    <form>
      <Input
        isRequired={true}
        type="text"
        label="Name"
        placeholder="Insert your name"
        style={style2}
      />
      <Input
        isRequired={true}
        type="email"
        label="Email"
        placeholder="Insert your email"
        style={style}
        helperText="이메일 주소에 @를 포함해주세요."
      />
      <TextArea
        isRequired={true}
        label="Message"
        rows={4}
        placeholder="Insert your message here"
        style={style}
      />

      <button
        type="submit"
        className="box-border w-full p-3 mt-5 bg-[#0dd189] text-[white] rounded-lg border-[1px] border-solid border-white hover:bg-[white] hover:border-[#0dd189] hover:text-[#0dd189] transition-color duration-500"
      >
        보내기
      </button>
    </form>
  );
}
