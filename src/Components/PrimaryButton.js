import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) { 
    const Button = styled.div`
        background: #3B82F6;
        border-radius: 24px;
        width: 217px;
        color: white;
        &:hover {
            background: #3B82F6;
            opacity: 80%;
        }
        &:active {
            background: #0F172A;
            opacity: 60%;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;