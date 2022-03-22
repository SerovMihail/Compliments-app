import styled, { keyframes } from 'styled-components';



const rotate = keyframes`
  from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;

const SvgRounding = styled.div`
  animation: ${rotate} 2s linear infinite
`;

export const Loading = () => {

  return (
    <SvgRounding>

    </SvgRounding>


  );
};
