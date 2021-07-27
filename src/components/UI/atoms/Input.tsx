import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface InputProps extends DefaultProps {}

const Input = styled.input`
  outline-style: none;

  width: ${(props: InputProps) => (props.width ? props.width : '380px')};
  height: ${(props: InputProps) => (props.height ? props.height : '40px')};
  margin-right: ${(props: InputProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: InputProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  padding-left: 5px;

  border: 1px solid #e9b3b3;

  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: black;
`;

export { Input };
