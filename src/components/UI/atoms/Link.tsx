import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface LinkProps extends DefaultProps {
  fontSize?: string;
  color?: string;
}

const Link = styled.div`
  width: ${(props: LinkProps) => (props.width ? props.width : 'auto')};
  height: ${(props: LinkProps) => (props.height ? props.height : '15px')};
  margin-right: ${(props: LinkProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: LinkProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  font-style: normal;
  font-weight: 200;
  font-size: ${(props: LinkProps) =>
    props.fontSize ? props.fontSize : '11px'};
  line-height: 13px;

  cursor: pointer;

  color: ${(props: LinkProps) => (props.color ? props.color : '#6b6b6b')};
`;

export { Link };
