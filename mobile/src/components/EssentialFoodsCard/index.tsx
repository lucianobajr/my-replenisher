import React from "react";

import { Container, Main, IndexText, Status, StatusText, Name } from "./styles";

import { THEME } from "../../theme";

interface EssentialFoodsCardProps {
  index: string;
  status: "yes" | "no";
  name: "arroz" | "feijão" | "óleo" | "açucar";
}

const EssentialFoodsCard: React.FC<EssentialFoodsCardProps> = ({
  index,
  status,
  name,
}) => {
  return (
    <Container
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[
        THEME.COLORS.GREEN_GRADIENT_PRIMARY,
        THEME.COLORS.GREEN_GRADIENT_SECONDARY,
      ]}
    >
      <Main>
        <IndexText>{index}</IndexText>
        <Status status={status}>
          <StatusText>{status === "yes" ? "ok" : "em falta"}</StatusText>
        </Status>
      </Main>
      <Name>{name}</Name>
    </Container>
  );
};

export default EssentialFoodsCard;
