import React from "react";

import { Container, Background } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProps {
  big: boolean;
  children: React.ReactNode;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({
  big,
  children,
  isLoading,
  ...rest
}) => {
  return (
    <Container disabled={!!isLoading} {...rest}>
      <Background>{children}</Background>
    </Container>
  );
};

export default Button;
