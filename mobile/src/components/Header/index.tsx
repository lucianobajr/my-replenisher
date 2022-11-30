import React from "react";

import { Button, Container, Hour, Name, Texts, Profile } from "./styles";

import { Feather } from "@expo/vector-icons";
import { THEME } from "../../theme";

interface HeaderProps {
  name: string;
  profile: boolean;
  open: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, open, profile }) => {
  const hour = new Date().getHours();
  const hourText =
    hour > 0 && hour < 12
      ? "Bom Dia"
      : hour > 13 && hour <= 18
      ? "Boa Tarde"
      : "Boa Noite";

  return (
    <Container>
      {profile ? (
        <Profile>Meu Perfil</Profile>
      ) : (
        <Texts>
          <Hour>{hourText}</Hour>
          <Name>{name}</Name>
        </Texts>
      )}
      <Button onPress={open}>
        <Feather name="bell" color={THEME.COLORS.BLACK_SECONDARY} size={32} />
      </Button>
    </Container>
  );
};

export default Header;
