import styled, { css } from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

import { THEME } from "../../theme";

export const Container = styled(LinearGradient)`
  width: ${RFValue(260)}px;
  border-radius: 5px;
  padding: 18px 27px;
  padding-bottom: ${RFValue(39)}px;
  margin-right: 23px;
`;

interface StatusProps {
  status: "yes" | "no";
}

const statusTypeVariations = {
  yes: css`
    background-color: ${THEME.COLORS.YELLOW};
  `,
  no: css`
    background-color: ${THEME.COLORS.RED};
  `,
};

export const Main = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const IndexText = styled.Text`
  font-family: ${THEME.FONTS.BOLD};
  font-size: ${RFValue(24)}px;

  color: ${THEME.COLORS.WHITE};
`;


export const Status = styled.View<StatusProps>`
  ${(props) => statusTypeVariations[props.status]}

  padding: 2px 8px;
`;

export const StatusText = styled.Text`
  font-family: ${THEME.FONTS.BOLD};
  font-size: ${RFValue(12)}px;

  color: ${THEME.COLORS.WHITE};
`;

export const Name = styled.Text`
  font-family: ${THEME.FONTS.BOLD};
  font-size: ${RFValue(32)}px;

  color: ${THEME.COLORS.WHITE};
`;