import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface ImgProps extends DefaultProps {
  url: string;
}

const Img = styled.div`
  width: ${(props: ImgProps) => (props.width ? props.width : '200px')};
  height: ${(props: ImgProps) => (props.height ? props.height : '40px')};
  margin-right: ${(props: ImgProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: ImgProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  background-image: url(${(props: ImgProps) =>
    props.url ? props.url : 'none'});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export { Img };
