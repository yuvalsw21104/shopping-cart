import React, { type KeyboardEvent } from "react";
import { Box, CssBaseline, Stack, TextField, Typography } from "@mui/material";
import Item from "./Item";
import picture from "./assets/groceries.jpg";

const MainPage = () => {
  const [items, setItems] = React.useState<string[]>(() => {
    const storedData = localStorage.getItem("myItems");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = (event.target as HTMLInputElement).value;
      clearInput(event);
      handleSubmit(value);
    }
  };

  const clearInput = (event: KeyboardEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).value = "";
  };

  const handleSubmit = (item: string) => {
    if (item !== "") {
      const updateItems = [...items, item];
      localStorage.setItem("myItems", JSON.stringify(updateItems));
      setItems((prev) => [...prev, item]);
    }
  };

  const handleDoubleClick = (itemIndex: number) => {
    const updateItems = items.filter((_, index) => index !== itemIndex);
    localStorage.setItem("myItems", JSON.stringify(updateItems));
    setItems(updateItems);
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${picture})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", //
      }}
    >
      <Stack
        direction="column"
        spacing={"15px"}
        alignItems="center"
        justifyContent="flex-start"
        sx={{
          width: "20%",
          height: "40%",
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          borderRadius: "4px",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <CssBaseline />
        <Typography>רשימת קניות סריקובים</Typography>{" "}
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="הזן פריט"
          variant="outlined"
          onKeyDown={handleKeyDown}
        />
        <Box
          mt={2}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: "4px",
            width: "90%",
            direction: "rtl",
            overflowY: "scroll",
          }}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              index={index}
              text={item}
              handleDoubleClick={handleDoubleClick}
            />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default MainPage;
