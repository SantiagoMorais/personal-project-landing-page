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
            <div className="info">
                <h1 className="title">Cardio Exercise</h1>
                <p className="heroText" style={{ color: theme.textColor }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis nobis culpa, repellat natus eligendi? Ipsa tempora maxime, veritatis enim eligendi quod debitis, porro quas accusantium, eius eum nisi unde?
                </p>
                <div className="buttons">
                    <button className="button"
                        style={{
                            color: theme.color,
                            backgroundColor: "rgb(37, 171, 117)",
                        }}
                    >
                        Get Started
                    </button>
                    <button className="button"
                        style={{
                            color: theme.color,
                            backgroundColor: theme.secondaryColor,
                        }}
                    >
                        Preview
                    </button>
                </div>

            </div>
            <img className="heroImage"
                src={heroImage}
                alt="hero-image"
            />
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

    .info {
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: relative;

        .title {
            font-size: 200px;
            line-height: .8;
            letter-spacing: -5px;
        }

        .heroText {
            max-width: 50%;
            margin-left: 16px;
        }

        .buttons {
            display: flex;
            gap: 20px;

            .button {
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
            }
        }
    }

    .heroImage {
        height: 500px;
    }

    @media (max-width: 1380px) {
        .info {
            .title {
                font-size: 120px;
            }
        }
    }

    @media (max-width: 1040px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;

        .info {
            flex-direction: column;
            align-items: center;
            gap: 0;
            width: 100%;

            .title {
                width: 460px;
                text-align: center;
                margin-bottom: 20px;
            }

            .heroText {
                align-self: flex-start;
                max-width: 40%;
                margin-bottom: 20px;
            }

            .buttons {
                flex-direction: column;
                align-self: flex-start;
                margin-left: 25px;
            }
        }

        .heroImage {
            position: absolute;
            height: 300px;
            bottom: 0;
            right: 0;
        }
    }

    @media (max-width: 560px) {
        width: 100%;

        .info {
            .title {
                font-size: 80px;
            }

            .heroText {
                font-size: 12px;
            }

            .buttons {
                .button {
                    width: 120px;
                    font-size: 12px;
                    padding: 15px;
                }
            }
        }

        .heroImage {
            height: 230px;
            top: 38%;
        }
    }

    @media (max-width: 420px) {
        .heroImage {
            height: 180px;
            top: 38%;
        }
    }

    @media (max-width: 375px) {
        .info {
            .title {
                width: 100%;
                font-size: 60px;
            }

        }

        .heroImage {
            height: 150px;
            top: 30%;
        }
    }

    @media (max-width: 300px) {
        .info {
            align-items: center;
            justify-content: center;

            .title {
                font-size: 50px;
            }

            .heroText {
                align-self: center;
                max-width: 100%;
                margin-bottom: 20px;
                text-align: center;
            }

            .buttons {
                flex-direction: column;
                align-self: center;
            }

        }

        .heroImage {
            display: none;
        }
    }
`

