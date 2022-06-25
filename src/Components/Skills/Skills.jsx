import { DivMain, Header, Title, BtnAdd, DivSkills } from "./SkillsStyles";
import Skill from "../Skill/Skill";

export default function Skills({
  skills,
  setModal,
  setskillEdit,
  setSkill,
}) {
  return (
    <DivMain>
      <Header>
        <Title>Tecnologias</Title>
        <BtnAdd onClick={() => setModal(true)}>+</BtnAdd>
      </Header>
      <DivSkills>
        {skills.length === 0 ? (
          <Title>Ainda não há tecnologias cadastradas</Title>
        ) : (
          skills.map((skill) => {
            return <Skill skill={skill} key={skill.id} setskillEdit={setskillEdit} setSkill={setSkill} />;
          })
        )}
      </DivSkills>
    </DivMain>
  );
}
