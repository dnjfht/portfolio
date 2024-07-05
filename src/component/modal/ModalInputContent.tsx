import Button from "../button/Button";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

export default function ModalInputContent() {
  const style = { mt: 3, width: "100%", outline: "none" };
  const style2 = { mt: 5, width: "100%", outline: "none" };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
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

      <Button
        type="submit"
        btnContent="메일 전송하기"
        width="w-full"
        styleP="p-3"
        styleMargin="mt-5"
      />
    </form>
  );
}
