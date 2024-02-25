import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Exercise = (props) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Video>
            <Image src={props.src} alt={props.alt} />
            <Div
                style={{
                    boxShadow: `0 -60px 15px ${theme.backgroundColor} inset`,
                    transition: `.3s`
                }}
            >
                <ExerciseTitle>{props.title}</ExerciseTitle>
                <VideoDuration
                    style={{
                        backgroundColor: theme.backgroundColor,
                        transition: `.3s`
                    }}
                >58:24</VideoDuration>
            </Div>
        </Video>
    )
}

const Video = styled.div`
    width: 350px;
    position: relative;
    cursor: pointer;
    transition: .3s;
    @media (max-width: 560px) {
        width: 100%;
    };
    &:hover {
        opacity: .6;
        width: 340px;
        margin: 0 5px;
    }
`

const Image = styled.img`
    width: 100%;
    border-radius: 12px;
    height: 250px;
    object-fit: cover;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: -40px;
    left: -10px;
    width: 105%;
    padding-left: 20px;
    height: 100px;
    @media (max-width: 830px) {
        padding-left: 40px;
    }
`

const ExerciseTitle = styled.h3`
    font-size: 55px;
    font-weight: 700;
    @media (max-width: 830px) {
    font-size: 30px;   
    }
`

const VideoDuration = styled.p`
    padding: 5px;
    border-radius: 5px;
    font-weight: 700;
    
`

Exercise.defaultProps = {
    title: "Title",
};