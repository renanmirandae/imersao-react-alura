import * as config from '../../config.json';
import styled from "styled-components";

const StyledHeader = styled.div`
    header{
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header section:nth-child(1)
    {
        display: flex;
        gap:10px;
        align-items: center;
    }
`

function Header()
{
    return(
        <StyledHeader>
            <header>
                <section>
                    <img src={config.youtubelogo} />
                    <h1>AluraTube</h1>
                </section>
                <section>
                    <input type="text" placeholder='Video'/>
                </section>
                <section>
                    <span>mode</span>
                </section>
            </header>
        </StyledHeader>
    );
}

export default Header;

