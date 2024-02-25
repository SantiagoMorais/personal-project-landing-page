import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Exercise } from "../exercise"
import styled from "styled-components"

import lifting from '../../assets/lifting.jpg'
import pushUp from '../../assets/push-up.jpg'
import running from '../../assets/running.jpg'
import stretching from '../../assets/stretching.jpg'
import treadmill from '../../assets/treadmill.jpg'
import yoga from '../../assets/yoga.jpg'

export const PopularExercices = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Container style={{ color: theme.color }}>
            <Title>Popular Exercices</Title>
            <Exercices>
                <Exercise src={treadmill} alt="treadmill" title="Treadmill"/>
                <Exercise src={stretching} alt="stretching" title="Stretching"/>
                <Exercise src={yoga} alt="yoga" title="Yoga"/>
                <Exercise src={running} alt="running" title="Running"/>
                <Exercise src={lifting} alt="lifting" title="Lifting"/>
                <Exercise src={pushUp} alt="push up" title="Push Up"/>
            </Exercices>
        </Container>
    )
}

const Title = styled.h2`
    font-size: 35px;
    @media (max-width: 830px) {
        font-size: 25px;
    }
`

const Container = styled.section`
    transition: .3s;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    margin-bottom: 150px;
    position: relative;
    gap: 40px;
    align-items: center;
`

const Exercices = styled.section`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
`
