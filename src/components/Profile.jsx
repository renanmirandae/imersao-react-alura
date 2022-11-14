import * as config from '../../config.json';
import styled from "styled-components";

const StyledProfile = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius:50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 25px;
        gap: 16px;
    }
`

function Profile() {

    return (
        <StyledProfile>
            <section className='user-info'>
                <img src={`https://www.github.com/${config.github}.png`} />
                <div><h1>{config.name}</h1>
                    <span>{config.job}</span></div>
            </section>
        </StyledProfile>
    );
}

export default Profile;
