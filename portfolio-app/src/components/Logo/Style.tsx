import styled from "styled-components";
import { Box, HStack, Heading } from "@chakra-ui/react";

export const LogoOuterContainer = styled(HStack)`
  color: white;
  margin-left: 1rem;
`;

export const DiogoText = styled(Heading)`
  font-family: "Sora Bold" !important;
`;

export const DevText = styled(Heading)`
  font-family: "Sora Regular" !important;
`;

export const Rectangle = styled(Box)`
  width: 2.2rem;
  height: 0.55rem;
  background-color: white;
  align-self: flex-end;
`;
