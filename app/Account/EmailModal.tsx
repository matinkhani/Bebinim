"use client"
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AddEmail } from "../Styled Components/Account";
import { Div, EmailBtn, EmailInput } from "../Styled Components/NameModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  display:"flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  height:250,
  width: 500,
  bgcolor: "#291212",
  borderradius:"8px",
  border: "none",
  outeline: "none",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Div>
      <AddEmail onClick={handleOpen}>افزودن ایمیل</AddEmail>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <EmailInput placeholder="@Gmail.com"/>
            <EmailBtn  onClick={handleClose}>افزودن ایمیل</EmailBtn>
          </Box>
        </Fade>
      </Modal>
    </Div>
  );
}
