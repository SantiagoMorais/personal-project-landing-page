import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components";
import heroImage from "../../assets/hero-image.png"

export const Hero = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container
            style={{
                color: theme.color,
            }}
        >
            <Info>
                <Title>Cardio Exercise</Title>
                <Text style={{ color: theme.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis nobis culpa, repellat natus eligendi? Ipsa tempora maxime, veritatis enim eligendi quod debitis, porro quas accusantium, eius eum nisi unde?</Text>
                <Buttons>
                    <Button
                        style={{
                            color: theme.color,
                            backgroundColor: "rgb(37, 171, 117)",
                        }}
                    >
                        Get Started
                    </Button>
                    <Button
                        style={{
                            color: theme.color,
                            backgroundColor: theme.secondaryColor,
                        }}
                    >
                        Preview
                    </Button>
                </Buttons>

            </Info>
            <HeroImage src={heroImage} alt="hero-image" />
        </Container>
    )
}

const Container = styled.section`
    transition: .3s;
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    margin-bottom: 100px;
    position: relative;
    @media (max-width: 1040px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    @media (max-width: 1040px) {
        flex-direction: column;
        align-items: center;
        gap: 0;
        width: 100%;
    }
`

const Title = styled.h1`
    font-size: 200px;
    line-height: .8;
    letter-spacing: -5px;
    @media (max-width: 1380px) {
        font-size: 120px;
    }
    @media (max-width: 1040px) {
        width: 460px;
        text-align: center;
        margin-bottom: 20px;
    }
    @media (max-width: 560px) {
        font-size: 80px;
    }

`

const Text = styled.p`
    max-width: 50%;
    margin-left: 16px;
    @media (max-width: 1040px) {
        align-self: flex-start;
        max-width: 40%;
        margin-bottom: 20px;
    }
    @media (max-width: 560px) {
        font-size: 12px;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 1040px) {
        flex-direction: column;
        align-self: flex-start;
        margin-left: 25px;
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
    @media (max-width: 560px) {
        width: 120px;
        font-size: 12px;
        padding: 15px;
    }
`

const HeroImage = styled.img`
    height: 500px;
    @media (max-width: 1040px) {
        position: absolute;
        height: 300px;
        bottom: 0;
        right: 0;
    }
    @media (max-width: 560px) {
        height: 230px;
        top: 38%;
    }
    @media (max-width: 420px) {
        height: 180px;
        top: 38%;
    }
`

