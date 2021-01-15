//different success messages in case of upload successful and conversion successful using props
import React from 'react';
import { SmallerText } from '../common/styledComponents/styled';
import { SuccessBar } from '../successMessage/successMessage';

const Success = (props: { action: string }) => {
    return (
        <SuccessBar>
            <SmallerText>{props.action}</SmallerText>
        </SuccessBar>
    );
};
export default Success;
