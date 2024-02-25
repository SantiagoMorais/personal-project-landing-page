import styled from "styled-components"
import { ThemeTogglerButton } from "../theme-toggler-button"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Section
            style={{
                color: theme.color
            }}
        >
            <h2>Workout</h2>
            <Ul>
                <Li>
                    <ThemeTogglerButton />
                </Li> 
                <Li>
                    <A
                        style={{ color: theme.color }}
                        href="#">
                        Exercises
                    </A>
                </Li>
                <Li>
                    <A
                        style={{ color: theme.color }}
                        href="#">Trainers</A>
                </Li>
                <Li>
                    <A
                        style={{ color: theme.color }}
                        href="#">Pricing</A>
                </Li>
                <Li>
                    <A
                        style={{ color: theme.color }}
                        href="#">Login</A>
                </Li>
            </Ul>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    transition: .3s;
    width: 100%;
    margin-bottom: 80px;
    max-width: 1440px;
    @media (max-width: 560px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
    }
`

const Ul = styled.ul`
    display: flex;
    gap: 20px;
    font-size: 12px;
    align-items: center;
    @media (max-width: 560px) {
        gap: 15px;
    };
`

const Li = styled.li`
    font-weight: 500;
`

const A = styled.a`
    transition: .3s;
    padding:5px;
    border-radius: 5px;
    &:hover {
        background-color: #25ab75;
    }
`
