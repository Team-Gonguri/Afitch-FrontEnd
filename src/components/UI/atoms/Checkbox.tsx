import styled from 'styled-components';

import { Input } from './index';
import { DefaultProps } from '../../../entity/components/atoms';

interface CheckboxProps extends DefaultProps {}

const Checkbox = styled(Input).attrs({ type: 'checkbox' })`
  width: ${(props: CheckboxProps) => (props.width ? props.width : '20px')};
  height: ${(props: CheckboxProps) => (props.height ? props.height : '20px')};
  margin-right: ${(props: CheckboxProps) =>
    props.marginRight ? props.marginRight : '0px'};
  margin-bottom: ${(props: CheckboxProps) =>
    props.marginBottom ? props.marginBottom : '0px'};
`;

export { Checkbox };
