import { TextField } from "@mui/material";

export default function ModalInputContent() {
  return (
    <form>
      <TextField
        required
        id="outlined-required"
        label="Name"
        // defaultValue="홍길동"
        placeholder="Insert your name"
        // helperText="Insert your name"
        sx={{ mt: 5, width: "100%", outline: "none" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Email"
        placeholder="Insert your email"
        sx={{ mt: 3, width: "100%", outline: "none" }}
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="message"
        placeholder="Insert your message here"
        multiline
        rows={4}
        sx={{ mt: 3, width: "100%", outline: "none" }}
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
