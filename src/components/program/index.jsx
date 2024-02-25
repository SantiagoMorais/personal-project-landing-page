import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Program = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Div>
            <Topic style={{ color: theme.color, borderBottom: `1px solid ${theme.secondaryColor}` }}>
                <Class>
                    <Text style={{ color: theme.textColor }}>{props.value}</Text>
                    <div>
                        <Title>{props.title}</Title>
                        <Text style={{ color: theme.textColor }}>{props.classesNumber} videos</Text>
                    </div>
                </Class>
                <div></div>
                <FontAwesomeIcon icon="fas fa-arrow-right" style={{ fontSize: "20px" }} />
            </Topic>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 780px) {
        padding: 0 10px;
    }
`

const Topic = styled.li`
    display: flex;
    justify-content: space-between; 
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    transition: .3s;
    max-width: 1440px;
    &:hover {
        opacity: .6;
    }
`

const Class = styled.div`
    display: flex;
    gap: 200px;
    @media (max-width: 780px) {
        gap: 100px;
    }
    @media (max-width: 520px) {
        gap: 50px;
    }
`

const Title = styled.h3`
@media (max-width: 520px) {
    font-size: 16px;
} 
`

const Text = styled.p`
    font-weight: 500;
`

Program.defaultProps = {
    value: "00",
    title: "Class Title",
    classesNumber: "00",
}