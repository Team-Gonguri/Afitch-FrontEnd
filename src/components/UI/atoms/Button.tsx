import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface ButtonProps extends DefaultProps {
  background?: string;
  border?: string;
  color?: string;
}

const Button = styled.button`
  width: ${(props: ButtonProps) => (props.width ? props.width : '200px')};
  height: ${(props: ButtonProps) => (props.height ? props.height : '40px')};
  margin-right: ${(props: ButtonProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: ButtonProps) =>
    props.marginBottom ? props.marginBottom : '0px'};
  border: ${(props: ButtonProps) => (props.border ? props.border : 'none')};
  background: ${(props: ButtonProps) =>
    props.background ? props.background : '#e9b3b3'};

  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: ${(props: ButtonProps) => (props.color ? props.color : '#ffffff')};
`;

export { Button };
