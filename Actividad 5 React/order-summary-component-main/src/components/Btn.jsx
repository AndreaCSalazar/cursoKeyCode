import styled from "styled-components";


const StyleBtn = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || "blue"};
  color:${(props) => props.txColor|| "white"};
  text-align: center;
  min-width: inherit;
  min-height: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 8px 12px hsl(242deg 88.4% 56.3% / 45%);
  
`;


const Btn = ({ text, bgColor, txColor, onClick }) => {

  return (
    <StyleBtn bgColor={bgColor} onClick={onClick} txColor={txColor}>
      <strong>{text}</strong>
    </StyleBtn>
  
  );
};


export default Btn;
