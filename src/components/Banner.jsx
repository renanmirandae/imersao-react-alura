import * as config from '../../config.json';
import styled from "styled-components";

const StyledBanner = styled.div`
    img{
        width: 100vw;
        height: 350px;
        object-fit:cover;
    }
`

function Banner()
{
    return(
        <StyledBanner>
            <div className='banner'>
                <img src={config.banner}/>
            </div>
        </StyledBanner>
    );
}

export default Banner;