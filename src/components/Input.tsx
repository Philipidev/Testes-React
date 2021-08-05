import styled from 'styled-components'
import react from 'react';
import { InspectOptions } from 'util';

export interface Props{
    /** 
   * Não gostei aloooooooooooooooooooooooooooooooooo
   */
    cor?: string
}

const Input : React.FC<Props> = styled.input<Props>`
    border: 3px solid ${props => props.cor || 'red'} ;
    background-color: pink;
    border-radius: 20px;
    outline: 0px;
`

export default Input;