import React from 'react';
import styled from 'styled-components';

export const PageHeader = ({ children }) => {
    document.title = children;
    return(
        <h1>{ children }</h1>
    )
};

export const RightShift = styled.div`
    text-align: right;
`;
