import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
import styled from 'styled-components';

const Item = styled.div`
width: 447px;
`

function Preferences() {
    return (
        <Item className='d-inline-flex flex-column gap-4'>
            <div className='d-inline-flex flex-column gap-3'>
            <TitledTextInput title='Название компании' def='SPBEAUTY'/>
            <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            </div>
            <PrimaryButton>Сохранить</PrimaryButton>
        </Item>
    );
}

export default Preferences;