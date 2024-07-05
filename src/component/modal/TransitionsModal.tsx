import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Util from "../header/Util";
import ModalInputContent from "./ModalInputContent";

import { PiHandWavingThin, PiRabbitThin } from "react-icons/pi";

interface TransitionsModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 50,
  borderRadius: "1rem",
  p: 4,
  outline: "none",
  maxWidth: "86%",
  maxHeight: "60vh",
  overflowY: "scroll",
};

export default function TransitionsModal({
  setIsModalOpen,
  isModalOpen,
}: TransitionsModalProps) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen}
      // onClose={() => setIsModalOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isModalOpen}>
        <Box sx={style}>
          <Util
            onClick={() => setIsModalOpen(false)}
            icon={<PiHandWavingThin />}
            fontSize="text-[1.5rem]"
            style="absolute top-0 right-0 mt-5 mr-5"
          />

          <div className="w-full">
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{ mt: 1, color: "#0dd189", fontWeight: "bold" }}
            >
              Contact Me!
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 1, fontSize: "0.85rem", color: "#7c7c7c" }}
            >
              연락 주시면 최대한 빨리 답변해 드리겠습니다.
            </Typography>
          </div>

          <div className="w-full mt-8">
            <div className="box-border w-full p-5 rounded-lg shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center hover:border-[1px] hover:border-solid hover:border-[#1ff4a6] transition-color duration-500">
              <Util icon={<PiRabbitThin />} fontSize="text-[2.5rem]" />
              <p className="mt-2">Email</p>
              <p className="text-text-2">dnjfht@gmail.com</p>
            </div>
            <ModalInputContent />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
