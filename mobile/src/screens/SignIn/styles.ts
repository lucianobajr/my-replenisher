import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { THEME } from "../../theme";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background: ${THEME.COLORS.WHITE};
`;

export const Content = styled.View`
  width: 100%;

  position: relative;
`;

export const LogoContent = styled.View`
  width: 100%;

  position: absolute;
  z-index: 100;

  padding-top: ${getStatusBarHeight() + 27}px;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.GREEN_GRADIENT_SECONDARY};

  font-family: ${THEME.FONTS.BOLD};
  font-size: ${RFValue(40)}px;
`;

export const SubTitle = styled.Text`
  color: ${THEME.COLORS.BLACK_SECONDARY};

  font-family: ${THEME.FONTS.MEDIUM};
  font-size: ${RFValue(16)}px;
`;

export const SignInText = styled.Text`
  color: ${THEME.COLORS.BLACK_SECONDARY};

  font-family: ${THEME.FONTS.MEDIUM};
  font-size: ${RFValue(20)}px;

  margin-top: 60px;
`;

export const FormContainer = styled.View``;
