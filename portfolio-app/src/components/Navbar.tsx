import { HStack, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack justifyContent={"space-between"}>
      <Heading>Diogo_Dev</Heading>
      <HStack>
        <Link href={"#about"}>About</Link>
        <Link href={"#skills"}>Skills</Link>
        <Link href={"#work"}>Work</Link>
        <Link href={"#contact"}>Contact</Link>
      </HStack>
    </HStack>
  );
}
