import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface VideoProps extends DefaultProps {}

const Video = styled.iframe`
  width: ${(props: VideoProps) => (props.width ? props.width : '200px')};
  height: ${(props: VideoProps) => (props.height ? props.height : '40px')};
  margin-right: ${(props: VideoProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: VideoProps) =>
    props.marginBottom ? props.marginBottom : '0px'};
`;

export { Video };
