import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { THEME } from "../../theme"

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(172)}px;

  background: ${THEME.COLORS.GRAY};
  border: 1px solid ${THEME.COLORS.BLACK_SECONDARY};
  border-radius: 15px;
`;

