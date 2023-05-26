import { HStack } from "@chakra-ui/react";
import styled from "styled-components";

export const OuterNavbar = styled(HStack)`
  position: fixed;
  width: 100%;
  background-color: black;
  border-bottom: 1px solid white;
  min-height: 10vh;
`;

export const LinksContainer = styled(HStack)`
  color: white;
  font-family: "Sora Regular" !important;
  gap: 4rem;
  margin-right: 8rem !important;
`;
