import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
`;

const Title = styled.div`
    color: #94A3B8;
`;

function TitledTextInput({title, def}) {

    return (
        <div className='d-flex flex-column gap-2'>
            <Title className='text-rg'> {title === undefined ? '' : title} </Title>
            <Input className='text-md py-2 px-3' defaultValue={def} ></Input>
    
        </div>
    );
}

export default TitledTextInput;