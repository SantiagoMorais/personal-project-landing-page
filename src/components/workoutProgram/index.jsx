import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import greenPaint from '../../assets/green-paint.png'
import { Trainer } from "../trainer"
import trainer1 from '../../assets/trainer-1.jpg'
import trainer2 from '../../assets/trainer-2.jpg'
import trainer3 from '../../assets/trainer-3.jpg'

export const WorkoutProgram = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            <Div style={{ color: theme.color }} >
                <TitleDiv>
                    <Title>Workout Program Made For You</Title>
                    <Image src={greenPaint} alt="green-paint" />
                </TitleDiv>
                <Info>
                    <Text style={{ color: theme.textColor }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam repellendus dolore sint temporibus nesciunt est incidunt. Sed rerum id voluptates quaerat aliquid non nostrum, tempore possimus autem, officia earum vel?</Text>
                    <Button
                        style={{
                            color: theme.color,
                            backgroundColor: "rgb(37, 171, 117)",
                        }}
                    >
                        Get Started
                    </Button>
                </Info>
            </Div>
            <Trainers>
                <Trainer src={trainer2} name="Jonathan Wise" />
                <Trainer src={trainer3} name="Michael Roberts" />
                <Trainer src={trainer1} name="Karen Summer" />
            </Trainers>
        </>
    )
}

const Div = styled.div`
    display: flex;
    gap: 50px;
    padding: 0 100px;
    justify-content: space-between;
    max-width: 1440px;
    position: relative;
    margin-bottom: 150px;
    @media (max-width: 680px) {
        gap: 20px;
        flex-direction: column;
        align-items: center;
        margin-bottom: 80px;
    }
`

const TitleDiv = styled.div`
    position: relative;
    height: 400px;
    width: 270px;
    @media (max-width: 680px) {
        height: 200px;
        text-align: center;
    }
    @media (max-width: 420px) {
        width: 200px;
    }
`

const Title = styled.h2`
    font-size: 80px;
    width: 300px;
    font-weight: 900;
    line-height: 1;
    position: absolute;
    z-index: 1;
    @media (max-width: 1040px) {
        font-size: 60px;
        width: 240px;
    }
    @media (max-width: 680px) {
        font-size: 45px;
        width: 100%;
        text-align: ce
        text-align: center;
    }
`

const Image = styled.img`
    height: 300px;
    position: absolute;
    bottom: -80px;
    left: -80px;
    @media (max-width: 1040px) {
        bottom: 50px;
        left: -70px;
        height: 250px;
    }
    @media (max-width: 680px) {
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        height: 200px;
    }
    @media (max-width: 420px) {
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        height: 180px;
    }
`

const Info = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 680px) {
        width: 100%;
        text-align: center;
        align-items: center;
    }
`

const Text = styled.p`
    font-size: 20px;
    line-height: 2;
    @media (max-width: 1320px) {
        font-size: 16px;
    }
    @media (max-width: 680px) {
        font-size: 14px;
        line-height: 1.5;
    }
`

const Button = styled.button`
    padding: 20px;
    width: 200px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    transition: .3s;
    cursor: pointer;
    border: 1px solid #ffffff;
    &:hover {
        box-shadow: 0 0 10px #25ab75;
        border: 1px solid #ffffff;
    }
    @media (max-width: 680px) {
        padding: 15px;
        width: 150px;
    }
`

const Trainers = styled.div`
    display: flex;
    gap: 50px;
    z-index: 1;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
`