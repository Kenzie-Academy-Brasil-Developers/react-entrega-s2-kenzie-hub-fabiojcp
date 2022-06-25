import { useState } from "react";
import {
  DivMain,
  Header,
  HeaderTitle,
  BtnClose,
  Form,
  Label,
  Input,
  Select,
  Option,
  BtnAdd,
} from "./AddSkillStyle";

export default function AddSkill({ addSkill, setModal, loadSkills }) {
    const [tech, setTech] = useState("")
    const [status, setStatus] = useState("Iniciante")

    function handleSubmit (event) {
        event.preventDefault()
        addSkill({"title": tech, "status": status})
        setModal(false)
        setTech("")
        setStatus("Iniciante")
        loadSkills()
    }

    

  return (
    <DivMain>
      <Header>
        <HeaderTitle>Cadastrar Tecnologia</HeaderTitle>
        <BtnClose onClick={() => setModal(false)}>X</BtnClose>
      </Header>
      <Form onSubmit={event => handleSubmit(event)}>
        <Label>Nome</Label>
        <Input placeholder="Tecnologia" onChange={(event)=> setTech(event.target.value)}></Input>
        <Label>Selecionar status</Label>
        <Select onSelect={(event)=> setStatus(event.target.value)}>
          <Option>Iniciante</Option>
          <Option>Intermediário</Option>
          <Option>Avançado</Option>
        </Select>
        <BtnAdd type="submit">Cadastrar Tecnologia</BtnAdd>
      </Form>
    </DivMain>
  );
}
