import {
  DivMain,
  Header,
  HeaderTitle,
  BtnClose,
  Form,
  Label,
  Select,
  Option,
} from "../AddSkill/AddSkillStyle";
import { BtnEdit, BtnDelete, DivBtns } from "./EditSkillStyle";
import { useState } from "react";

export default function EditSkill({
  setskillEdit,
  updateSkill,
  deleteSkill,
  skill,
  setSkill,
}) {
  const [status, setStatus] = useState(skill.status);

  function handleSubmit(type) {
    type === "edit"
      ? updateSkill(skill.id, { status: status })
      : deleteSkill(skill.id);   
      setSkill({})
      setskillEdit(false)
  }

  return (
    <DivMain>
      <Header>
        <HeaderTitle>Tecnologia Detalhes</HeaderTitle>
        <BtnClose onClick={() => setskillEdit(false)}>
          X
        </BtnClose>
      </Header>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Label>Nome</Label>
        <HeaderTitle>{skill.title}</HeaderTitle>
        <Label>Status</Label>
        <Select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <Option>Iniciante</Option>
          <Option>Intermediário</Option>
          <Option>Avançado</Option>
        </Select>
        <DivBtns>
          <BtnEdit onClick={() => handleSubmit("edit")}>
            Salvar alterações
          </BtnEdit>
          <BtnDelete onClick={() => handleSubmit("delete")}>Excluir</BtnDelete>
        </DivBtns>
      </Form>
    </DivMain>
  );
}
