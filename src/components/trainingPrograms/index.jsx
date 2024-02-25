import styled from "styled-components"
import { Program } from "../program"

export const TrainingPrograms = () => {
    return (
        <List>
            <Program value="01" title="Workout at Home" classesNumber="15"/>
            <Program value="02" title="Stay Strong and Fit" classesNumber="48"/>
            <Program value="03" title="High Intensity" classesNumber="25"/>
            <Program value="04" title="Simple Workout" classesNumber="35"/>
            <Program value="05" title="Burn Calories" classesNumber="35"/>
        </List>
    )
}

const List = styled.ol`
    width: 100%;
`