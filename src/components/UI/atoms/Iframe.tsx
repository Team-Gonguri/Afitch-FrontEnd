import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface IframeProps extends DefaultProps {}

const Iframe = styled.iframe`
  width: ${(props: IframeProps) => (props.width ? props.width : '200px')};
  height: ${(props: IframeProps) => (props.height ? props.height : '40px')};
  margin-right: ${(props: IframeProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: IframeProps) =>
    props.marginBottom ? props.marginBottom : '0px'};
`;

export { Iframe };
