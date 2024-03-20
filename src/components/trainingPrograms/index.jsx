import styled from "styled-components"
import { Program } from "../program"
import { programs } from "../../variables"

export const TrainingPrograms = () => {
    return (
        <List>
            {programs.map((program, index) =>
                <Program
                    key={index}
                    value={index >= 9 ? index + 1 : `0${index + 1}`}
                    title={program.title}
                    classesNumber={program.classesNumber} />
            )}
        </List>
    )
}

const List = styled.ol`
    width: 100%;
`