import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { THEME } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  padding-left: ${RFValue(25)}px;
  padding-right: ${RFValue(25)}px;
  padding-top: ${getStatusBarHeight() + 33}px;

  background: ${THEME.COLORS.WHITE};
`;

export const CreateListContainer = styled.View`
  margin-top: 42px;
`;

export const Text = styled.Text`
  color: ${THEME.COLORS.GREEN};

  font-family: ${THEME.FONTS.MEDIUM};
  font-size: ${RFValue(32)}px;
`;
export const ModalizeContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 20px 24px;
`;
