import { DivMain, Title, Text } from "./USStyle";
import { useState } from "react";

export default function UserSalutation() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <DivMain>
      <Title>Olá, {user.name.split(" ")[0]} {user.name.split(" ")[user.name.split(" ").length -1]}</Title>
      <Text>{user.course_module}</Text>
    </DivMain>
  );
}
