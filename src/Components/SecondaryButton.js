import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    const Button = styled.div`
        border: 1px solid #64748B;
        width: 217px;
        border-radius: 24px;
        color: #152842;
        background-color: #FFFFFF;
        &:hover {
            opacity: 80%;
        }
        &:active {
            opacity: 60%;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;