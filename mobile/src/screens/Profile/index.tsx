import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";

import { Header } from "../../components";

import { Container, ModalizeContainer, Button, ButtonText } from "./styles";

import { Feather } from "@expo/vector-icons";

const Profile: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);

  function handleCloseModal() {
    modalizeRef.current?.close();
  }

  function handleOpenModal() {
    modalizeRef.current?.open();
  }

  return (
    <Container>
      <Header profile name="Luciano" open={handleOpenModal} />

      <Button>
        <ButtonText>Sair</ButtonText>
        <Feather name="log-out" size={24} color="#fff" />
      </Button>

      <Modalize ref={modalizeRef} snapPoint={600} modalHeight={800}>
        <ModalizeContainer></ModalizeContainer>
      </Modalize>
    </Container>
  );
};

export default Profile;
