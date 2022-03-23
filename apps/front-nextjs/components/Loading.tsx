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
  background-color: blue;
  width: 20px;
  height: 20px;
  animation: ${rotate} 2s linear infinite
`;

export const Loading = () => {

  return (
    <SvgRounding>

    </SvgRounding>


  );
};
