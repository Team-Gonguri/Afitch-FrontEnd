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
    props.fontSize ? props.fontSize : '15px'};
  line-height: 13px;

  background: ${(props: LLinkProps) =>
    props.background ? props.background : '#e9b3b3'};

  cursor: pointer;

  text-align: center;

  font-style: normal;
  font-weight: 200;
  line-height: ${(props: LLinkProps) => (props.height ? props.height : '40px')};
  color: ${(props: LLinkProps) => (props.color ? props.color : '#ffffff')};
`;

interface CategoryLinkProps extends LLinkProps {
  img?: string;
}

const CategoryLink = styled(LLink)`
  display: 'flex';
  position: relative;

  max-width: 700px;

  padding-bottom: min(18%, 300px);
  margin-bottom: 20px;

  border-radius: 10px;
  margin-left: calc(6% / 4);
  margin-right: calc(6% / 4);

  background-image: url(${(props: CategoryLinkProps) =>
    props.img ? props.img : ''});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const FitnessLink = styled(LLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  max-width: 400px;

  padding-bottom: min(calc(72% / 7), calc(1200px / 7));

  margin: 0px calc(4% / 8);

  background: white;
  border: 1px solid #e9b3b3;

  cursor: pointer;

  font-size: max(calc(80vw / 5 / 12), 18px);
`;

export { LLink, CategoryLink, FitnessLink };
