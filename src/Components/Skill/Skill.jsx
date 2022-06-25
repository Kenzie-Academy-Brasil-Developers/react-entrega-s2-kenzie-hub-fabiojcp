import { DivMain, Title, Status } from "./SkillStyle";

export default function Skill({ skill, index, setskillEdit, setSkill }) {
  return (
    <DivMain key={`skill-${index}`} onClick={() => {
        setskillEdit(true)
        setSkill(skill)
        }}>
      <Title>{skill.title}</Title>
      <Status>{skill.status}</Status>
    </DivMain>
  );
}
