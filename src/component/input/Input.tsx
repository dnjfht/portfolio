import { TextField } from "@mui/material";
import useInput from "../../customhook/useInput";

interface InputProps {
  isRequired?: boolean;
  type: string;
  label: string;
  placeholder?: string;
  style?: React.CSSProperties;
  helperText?: string;
}

export default function Input({
  isRequired,
  type,
  label,
  placeholder,
  style,
  helperText,
}: InputProps) {
  const [text, onTextChange] = useInput("");

  return (
    <TextField
      required={isRequired}
      type={type}
      label={label}
      id="outlined-required"
      placeholder={placeholder}
      value={text}
      onChange={onTextChange}
      sx={{ ...style }}
      helperText={helperText}
    />
  );
}
