import { HStack, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { LinksContainer, OuterNavbar } from "./Style";
import Logo from "../Logo/Logo";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export default function Navbar() {
  return (
    <OuterNavbar justifyContent={"space-between"}>
      <Logo />
      <LinksContainer>
        <Link href={"#about"}>About</Link>
        <Link href={"#skills"}>Skills</Link>
        <Link href={"#work"}>Work</Link>
        <Link href={"#contact"}>Contact</Link>
      </LinksContainer>
    </OuterNavbar>
  );
}
