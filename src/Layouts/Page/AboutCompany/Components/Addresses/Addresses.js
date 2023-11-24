import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const Container = styled.div`
border: solid 1px rgb(100,116,139,.12);
border-radius: 24px;
width: 453px;
height: 420px;
`

function Addresses() {
    return (
        <Container className='d-inline-flex flex-column col-4 justify-content-between p-4'>

            <div className='d-flex flex-column gap-4'>

            <div className='title'>Адреса заведений</div>
                
                <div className='flex-column gap-2'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>

            </div>

                <SecondaryButton>Добавить филиал</SecondaryButton>
            

        </Container>
    );
}

export default Addresses;