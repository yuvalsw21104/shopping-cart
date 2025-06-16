import { Button } from "@mui/material";
import type { FC } from "react";

interface ItemProps {
  text: string;
  index: number;
  handleDoubleClick: (index: number) => void;
}

const Item: FC<ItemProps> = ({ text, index, handleDoubleClick }) => {


  return <Button onDoubleClick={() => handleDoubleClick(index)}>{text}</Button>;
};

export default Item;
