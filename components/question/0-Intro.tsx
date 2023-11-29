import { useSharedStates } from "@/contexts";
import { BtnContainer, QuestionBoxHeading, QuestionBoxPara } from "../index";

export function Intro() {
  const { handleOkClick } = useSharedStates();

  return (
    <>
      <QuestionBoxHeading>Bienvenido a Sherpal</QuestionBoxHeading>
      <QuestionBoxPara>
        Te ayudaremos a encontrar el tutor ideal en solo 9 saltos 🐇
        <br />
      </QuestionBoxPara>
      <BtnContainer showPressEnter={true} onClick={handleOkClick}>
        Continuar
      </BtnContainer>
    </>
  );
}
