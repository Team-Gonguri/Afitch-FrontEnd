import styled from 'styled-components';

import { DefaultProps } from '../../../entity/components/atoms';

interface ContainerProps extends DefaultProps {
  padding?: string | null;
}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${(props: ContainerProps) => (props.width ? props.width : 'auto')};
  height: ${(props: ContainerProps) => (props.height ? props.height : 'auto')};
  margin-right: ${(props: ContainerProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: ContainerProps) =>
    props.marginBottom ? props.marginBottom : '0px'};

  padding: ${(props: ContainerProps) => (props.padding ? props.padding : '0')};
`;

const RowContainer = styled(ColumnContainer)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export { ColumnContainer, RowContainer };
