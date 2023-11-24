import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 217px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    padding: 8px;
    padding-left: 16px;
    background-color: #F8FAFC;
    width: 100%;
    color: #94A3B8;
    &:hover {
        background: #F8FAFC;
        opacity: 80%;
    }
    &:focus {
        color: #0F172A;
        background: #F8FAFC;
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    box-sizing:border-box;
    right: 8px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
    padding: 8px;
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input placeholder='Найти'/>
            <SearchIconWrapper >  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;