import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DefaultProps } from '../../../entity/components/atoms';

interface LLinkProps extends DefaultProps {
  fontSize?: string;
  color?: string;
  background?: string;
  border?: string;
}

const LLink = styled(Link)`
  width: ${(props: LLinkProps) => (props.width ? props.width : '200px')};
  height: ${(props: LLinkProps) => (props.height ? props.height : '40px')};
  margin-right: ${(props: LLinkProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: LLinkProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  font-style: normal;
  font-weight: 200;
  font-size: ${(props: LLinkProps) =>
    props.fontSize ? props.fontSize : '11px'};
  line-height: 13px;

  background: ${(props: LLinkProps) =>
    props.background ? props.background : '#e9b3b3'};

  cursor: pointer;

  text-align: center;

  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: ${(props: LLinkProps) => (props.height ? props.height : '40px')};
  color: ${(props: LLinkProps) => (props.color ? props.color : '#ffffff')};
`;

export { LLink };
