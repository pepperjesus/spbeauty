import Avatar from "./Avatar";
import styled from "styled-components";

const ProfileName = styled.div`
color: #0F172A;
`
const Description = styled.div`
color: #64748B;
`

function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-4 d-inline-flex flex-column justify-content-center'>
                <ProfileName className='title mb-2'>SPBEAUTY</ProfileName>
                <Description className="text-lg mb-1">Салон красоты</Description>
                <Description className='text-lg'>Санкт-Петербург, Невский пр-т. 28</Description>
            </div>                  
        </div>
    );
}

export default Profile;