import { TextField } from "@mui/material";
import useInput from "../../customhook/useInput";

interface InputProps {
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  rows: number;
  style?: React.CSSProperties;
  helperText?: string;
}

export default function TextArea({
  isRequired,
  label,
  placeholder,
  rows,
  style,
  helperText,
}: InputProps) {
  const [text, onTextChange] = useInput("");
  console.log("textArea", text);

  return (
    <TextField
      required={isRequired}
      multiline
      label={label}
      id="outlined-multiline-static"
      rows={rows}
      placeholder={placeholder}
      value={text}
      onChange={onTextChange}
      sx={{ ...style }}
      helperText={helperText}
    />
  );
}
