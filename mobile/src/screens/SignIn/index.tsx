import React from "react";
import {
  Container,
  Content,
  LogoContent,
  SubTitle,
  Title,
  SignInText,
} from "./styles";

import Pattern from "../../assets/pattern-2.svg";
import Logo from "../../assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Pattern width={"100%"} />
        <LogoContent>
          <Logo />
          <Title>My Replenisher</Title>
          <SubTitle>seu app de compras inteligente</SubTitle>
          <SignInText>Faça login na sua conta</SignInText>
        </LogoContent>
        
      </Content>

      
    </Container>
  );
};

export default SignIn;
