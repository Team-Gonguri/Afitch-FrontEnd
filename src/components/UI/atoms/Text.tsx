import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface TextProps extends DefaultProps {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

const Text = styled.div`
  display: flex;
  felx-direction: column;
  align-items: center;

  width: ${(props: TextProps) => (props.width ? props.width : '200px')};
  height: ${(props: TextProps) => (props.height ? props.height : '30px')};
  margin-right: ${(props: TextProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: TextProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  font-style: normal;
  font-weight: ${(props: TextProps) =>
    props.fontWeight ? props.fontWeight : '200'};
  font-size: ${(props: TextProps) =>
    props.fontSize ? props.fontSize : '15px'};

  color: ${(props: TextProps) => (props.color ? props.color : 'black')};
`;

const CategoryText = styled(Text)`
  justifycontent: center;
  position: absolute;
  bottom: 10%;
`;

export { Text, CategoryText };
