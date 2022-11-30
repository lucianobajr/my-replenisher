import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { Header } from "../../components";
import Food from "../../components/Food";

import {
  Container,
  ModalizeContainer,
  EssentialFoods,
  InfoContainer,
  EssentialFoodsContainer,
  EssentialFoodsTexts,
} from "./styles";

const Home: React.FC = () => {
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

      <InfoContainer></InfoContainer>

      <EssentialFoodsContainer>
        <EssentialFoodsTexts>Alimentos Essenciais</EssentialFoodsTexts>

        <EssentialFoods>
          <Food type="up" value="01" name="Arroz" />
          <Food type="down" value="02" name="Feijão" />
          <Food type="up" value="03" name="Sal" />
          <Food type="down" value="04" name="Óleo" />
        </EssentialFoods>
      </EssentialFoodsContainer>

      <Modalize ref={modalizeRef} snapPoint={600} modalHeight={800}>
        <ModalizeContainer></ModalizeContainer>
      </Modalize>
    </Container>
  );
};

export default Home;
