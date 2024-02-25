import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context.jsx"
import styled from "styled-components";
import { Header } from "../header";
import { Hero } from "../hero"
import { PopularExercices } from "../popularExercices/index.jsx";
import { WorkoutProgram } from "../workoutProgram/index.jsx";
import { TrainingPrograms } from "../trainingPrograms/index.jsx";

export const Container = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Div style={{ backgroundColor: theme.backgroundColor }}>
            <Section style={{backgroundColor: theme.backgroundColor}}>
                <Header />
                <Hero />
                <PopularExercices />
                <WorkoutProgram />
                <TrainingPrograms />
            </Section>
        </Div>
    )
}

const Section = styled.section`
    max-width: 100vw;
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
`

const Div = styled.div`
    width: 100vw;
    min-height: 100vh;
`