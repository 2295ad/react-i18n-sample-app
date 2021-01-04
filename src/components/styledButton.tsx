import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
min-width: 200px;
border: none;
font-size: 18px;
padding: 7px 10px;
background-color:${prop=>prop.bg}
`

