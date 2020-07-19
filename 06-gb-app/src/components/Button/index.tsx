import React, { ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FunctionComponent<ButtonProps> = ({children, ...rest}) => (
    <Container type="button" {...rest}> 
        {children} 
    </Container>
);

export default Input;