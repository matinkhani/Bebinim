"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AddEmail } from "../Styled Components/Account";
import { Div, EmailBtn, EmailInput } from "../Styled Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../Redux/store";
import { GetEmail } from "../Redux/createslice";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();
  const Responsive480 = useMediaQuery("(max-width:480px)");
  const Responsive630 = useMediaQuery("(max-width:630px)");

  const style = {
    position: "absolute" as "absolute",
    top: "36%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    height: 250,
    width: 600,
    bgcolor: "#291212",
    borderRadius: "8px",
    outeline: "none",
    boxShadow: 24,
    p: 4,
  };
  const Responsivstyle480 = {
    position: "absolute" as "absolute",
    top: "38%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    height: 270,
    width: 350,
    bgcolor: "#291212",
    borderRadius: "8px",
    outeline: "none",
    boxShadow: 24,
    p: 4,
  };
  const Responsivstyle630 = {
    position: "absolute" as "absolute",
    top: "38%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    height: 270,
    width: 480,
    bgcolor: "#291212",
    borderRadius: "8px",
    outeline: "none",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Div>
      <AddEmail onClick={handleOpen}>
        {select.Email ? <>ویرایش</> : <>افزودن ایمیل</>}
      </AddEmail>
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
          <Box
            sx={
              Responsive480
                ? Responsivstyle480
                : Responsive630
                ? Responsivstyle630
                : style
            }
          >
            <EmailInput
              onChange={(e) => {
                dispatch(GetEmail(e.target.value));
              }}
              value={select.Email}
              placeholder="Email@gmail.com"
            />
            <EmailBtn onClick={handleClose}>افزودن ایمیل</EmailBtn>
          </Box>
        </Fade>
      </Modal>
    </Div>
  );
}
