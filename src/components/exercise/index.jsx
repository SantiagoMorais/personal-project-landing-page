import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Exercise = (props) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Video>
            <img className="thumbnail" src={props.src} alt={props.alt} />
            <div className="titleShadow"
                style={{
                    boxShadow: `0 -60px 15px ${theme.backgroundColor} inset`,
                    transition: `.3s`
                }}
            >
                <h3 className="exerciceTitle">{props.title}</h3>
                <p className="videoDuration"
                    style={{
                        backgroundColor: theme.backgroundColor,
                        transition: `.3s`
                    }}
                >58:24</p>
            </div>
        </Video>
    )
}

const Video = styled.div`
    width: 350px;
    position: relative;
    cursor: pointer;
    transition: .3s;

    .thumbnail {
        width: 100%;
        border-radius: 12px;
        height: 250px;
        object-fit: cover;
    }

    .titleShadow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: -40px;
        left: -10px;
        width: 105%;
        padding-left: 20px;
        height: 100px;

        .exerciceTitle {
            font-size: 55px;
            font-weight: 700;
        }
    
        .videoDuration {
            padding: 5px;
            border-radius: 5px;
            font-weight: 700;
        }
    }


    &:hover {
        opacity: .6;
        width: 340px;
        margin: 0 5px;
    }

    @media (max-width: 830px) {

        .titleShadow {
            padding-left: 40px;

            .exerciceTitle {
                font-size: 30px; 
            }
        }

    }

    @media (max-width: 560px) {
        width: 300px;

        &:hover {
            width: 280px;
            margin: 0 10px;
        }
    };

    @media (max-width: 375px) {
        width: 100%;

        .titleShadow {
            flex-direction: column;
            justify-content: center;
            bottom: -40px;
            width: 105%;
            padding-left: 20px;
            height: 80px;

            .exerciceTitle {
                font-size: 22px;
            }

            .videoDuration {
                border: 1px solid;
                padding: 2px 8px;
            }
        }


        &:hover {
            width: 90%;
            margin: 0 5%;
        }
    }
`

Exercise.defaultProps = {
    title: "Title",
};