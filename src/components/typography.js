
import styled from 'styled-components';

export const IntroText = styled.span`
  color: ${(props) => props.color ? props.color : 'inherit'}
  font-size: ${(props) => props.size ? props.size : '28px'};
  font-family: Roboto-Regular;
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  line-height: 1.6;
  font-family: "Roboto Condensed", "Lato", sans-serif;
`

export const Text = styled.span`
  color: ${(props) => props.color ? props.color : 'inherit'}
  font-size: ${(props) => props.size ? props.size : '20px'};
  font-family: Roboto-Regular;
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  font-family: "Montserrat", "Lato", sans-serif;
`;
