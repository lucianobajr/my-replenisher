import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { THEME } from '../../theme';

export const Container = styled.View`
    flex:1;
    background: ${THEME.COLORS.WHITE};
`;

export const Text = styled.Text`
    color: ${THEME.COLORS.GREEN};

    font-family:${THEME.FONTS.MEDIUM};
    font-size: ${RFValue(32)}px;
`;

export const EssentialFoods = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 },
  })`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
  `;