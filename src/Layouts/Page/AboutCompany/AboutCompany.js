import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
import styled from "styled-components";

const Container = styled.div`
width: 996px;
margin-left: 72px;
margin-top: 64px;
margin-right: 135px;
`
const FlexContainer = styled.div`
width: 996px;
`

function AboutCompany() {
    return (
        <Container>
            <Heading/> {/* Заголовок и кнопка справа */}
            <FlexContainer className="d-flex flex-row justify-content-between">
        
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            
            </FlexContainer>
        </Container>
    );
}

export default AboutCompany;