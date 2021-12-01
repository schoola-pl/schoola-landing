import styled from 'styled-components';

interface Props {
  icon?: string;
}

const IconDiv = styled.div<Props>`
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(${({ icon }) => icon});
`;

export default IconDiv;
