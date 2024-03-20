import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context.jsx"
import styled from "styled-components";
import { Header } from "../header/index.jsx";
import { Hero } from "../hero/index.jsx"
import { PopularExercises } from "../popularExercises/index.jsx";
import { WorkoutProgram } from "../workoutProgram/index.jsx";
import { TrainingPrograms } from "../trainingPrograms/index.jsx";

export const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <section className="home">
                <Header />
                <Hero />
                <PopularExercises />
                <WorkoutProgram />
                <TrainingPrograms />
            </section>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    min-height: 100vh;

    .home {
        min-width: 100vw;
        min-height: 100vh;
        padding: 40px 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: ".3s"
        max-width: 1440px;
    
        @media (max-width: 1040px) {
            padding: 20px 40px;
        }
    
        @media (max-width: 680px) {
            padding: 10px 20px;
        }
    }
`