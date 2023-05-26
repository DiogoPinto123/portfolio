import { HStack } from "@chakra-ui/react";
import { DevText, DiogoText, LogoOuterContainer, Rectangle } from "./Style";

export default function Logo() {
  return (
    <LogoOuterContainer>
      <DiogoText>Diogo</DiogoText>
      <DevText>Dev</DevText>
      <Rectangle />
    </LogoOuterContainer>
  );
}
