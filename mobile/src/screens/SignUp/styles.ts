import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

import { THEME } from '../../theme';

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    background: ${THEME.COLORS.WHITE};
`;

export const Text = styled.Text`
    color: ${THEME.COLORS.GREEN};

    font-family:${THEME.FONTS.MEDIUM};
    font-size: ${RFValue(32)}px;
`;