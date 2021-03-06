import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  white-space: pre-wrap;
`;

export const Line = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: 'Inconsolata', monospace;
`;

export const Tab = styled.span`
  height: 100%;
  width: 30px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
`;

export const AvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  left: 7%;
`;

export const Const = styled.span`
  color: ${({ theme }) => theme.editor.blue500};
`;

export const ObjectName = styled.span`
  color: ${({ theme }) => theme.editor.blue600};
`;

export const ObjectKey = styled.span`
  color: ${({ theme }) => theme.editor.blue400};
`;

export const Type = styled.span`
  color: ${({ theme }) => theme.editor.green};
`;

export const String = styled.span`
  color: ${({ theme }) => theme.editor.orange};
`;

export const PortfolioImageContainer = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 280px;
  }
`;

export const PortfolioImage = styled.img`
  width: 700px;
  height: 450px;

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 250px;
  }
  
`;

export const ButtonContainer = styled.div`
  width: 300px;
  height:150px;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  display: none;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  width: 40%;
  height: 50%;
  font-size: 20px;
  background: ${({ theme }) => theme.black};
  border: none;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.white};
`;

export const PortfolioImageWrapper = styled.div`
  position: relative;

  &:hover :not(${ButtonContainer}):not(${Button}) {
    transition: all 0.5s ease;
    filter: blur(10px);
  }
`;