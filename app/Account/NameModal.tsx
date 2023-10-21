"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { EditName } from "../Styled Components/Account";
import { Div, NameBtn, NameInput } from "../Styled Components/Modal";
import { GetName } from "../Redux/createslice";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../Redux/store";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();
  const regex = /^[a-z A-Zآ-ی_.-]*$/;
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
    top: "36%",
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
      <EditName onClick={handleOpen}>
        {select.Name ? <>ویرایش</> : <>افزودن</>}
      </EditName>
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
            <NameInput
              onChange={(e) => {
                if (e.target.value === "" || regex.test(e.target.value)) {
                  dispatch(GetName(e.target.value));
                }
              }}
              value={select.Name}
              maxLength={16}
              placeholder="نام و نام خانوادگی"
            />
            <NameBtn onClick={handleClose}>افزودن</NameBtn>
          </Box>
        </Fade>
      </Modal>
    </Div>
  );
}
