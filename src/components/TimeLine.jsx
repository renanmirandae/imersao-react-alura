import * as config from '../../config.json';
import styled from "styled-components";

const StyledTimeLine = styled.div`
    .timeline{
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin:25px 0;
        padding: 0 25px;
    }

    .videos-container{
        width: 100vw;
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .video img
    {
        width: 200px;
    }

    .video h1{
        font-size: .8em;
    }
`

function TimeLine()
{
    const playListNames = Object.keys(config.playlists);
    return(
        <StyledTimeLine>
        <div className='timeline'>
            {playListNames.map(name =>
            {
                const videos = config.playlists[name];
                return(
                    <section>
                    <h1>{name.toUpperCase()}</h1>
                    <div className='videos-container'>
                        {videos.map(video =>
                            {
                                return(
                                    <div className='video'>
                                        <a href={videos.url}>
                                            <img src={video.thumb} />
                                            <h1>{video.title}</h1>
                                        </a>
                                    </div>
                                    );
                                })}
                    </div>
                    </section>
                );
            })}
        </div>
        </StyledTimeLine>
    );
}

export default TimeLine;