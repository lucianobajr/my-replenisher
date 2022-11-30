import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";

import { Header } from "../../components";

import { Container, ListsContainer, ModalizeContainer, Text } from "./styles";

const Lists: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);

  function handleCloseModal() {
    modalizeRef.current?.close();
  }

  function handleOpenModal() {
    modalizeRef.current?.open();
  }
  return (
    <Container>
      <Header profile={false} name="Luciano" open={handleOpenModal} />

      <ListsContainer>
        <Text>Minhas Listas</Text>
      </ListsContainer>

      <Modalize ref={modalizeRef} snapPoint={600} modalHeight={800}>
        <ModalizeContainer></ModalizeContainer>
      </Modalize>
    </Container>
  );
};

export default Lists;
