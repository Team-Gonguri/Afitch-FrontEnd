import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';
import LogoImg from '../../../assets/Logo.png';

interface LogoProps extends DefaultProps {}

const Logo = styled.div`
  width: ${(props: LogoProps) => (props.width ? props.width : '480px')};
  height: ${(props: LogoProps) => (props.height ? props.height : '170px')};
  margin-right: ${(props: LogoProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: LogoProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;
`;

export { Logo };
