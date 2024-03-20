import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Exercise } from "../exercise"
import styled from "styled-components"
import { exercices } from "../../variables"

export const PopularExercises = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container style={{ color: theme.color }}>
            <h2 className="title">Popular Exercises</h2>
            <div className="exercices">
                {exercices.map((exercice, index) =>
                    <Exercise
                        key={index}
                        src={exercice.src}
                        alt={exercice.alt}
                        title={exercice.title}
                    />
                )}
            </div>
        </Container>
    )
}

const Container = styled.section`
    transition: .3s;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin-bottom: 150px;
    position: relative;
    gap: 40px;
    align-items: center;

    .title {
        font-size: 35px;
    }

    .exercices {
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
    }

    @media (max-width: 830px) {
        .title {
            font-size: 25px;
        }
    }
`
