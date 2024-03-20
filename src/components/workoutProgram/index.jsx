import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import greenPaint from '../../assets/green-paint.png'
import { Trainer } from "../trainer"
import { trainers } from "../../variables"

export const WorkoutProgram = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <Container>
            <div className="workoutProgram" style={{ color: theme.color }} >
                <div className="programTitle">
                    <h2 className="title">Workout Program Made For You</h2>
                    <img className="programImage" src={greenPaint} alt="green-paint" />
                </div>
                <div className="info">
                    <p className="programDescription" style={{ color: theme.textColor }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam repellendus dolore sint temporibus nesciunt est incidunt. Sed rerum id voluptates quaerat aliquid non nostrum, tempore possimus autem, officia earum vel?</p>
                    <button className="getStartedButton"
                        style={{
                            color: theme.color,
                            backgroundColor: "rgb(37, 171, 117)",
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <div className="trainers">
                {trainers.map((trainer, index) => 
                    <Trainer 
                    key={index}
                    src={trainer.src}
                    name={trainer.name}
                    />
                )}
            </div>
        </Container>
    )
}

const Container = styled.div`
    .workoutProgram {
        display: flex;
        gap: 50px;
        padding: 0 100px;
        justify-content: space-between;
        max-width: 1440px;
        position: relative;
        margin-bottom: 150px;

        .programTitle {
            position: relative;
            height: 400px;
            width: 270px;

            .title {
                font-size: 80px;
                width: 300px;
                font-weight: 900;
                line-height: 1;
                position: absolute;
                z-index: 1;
            }

            .programImage {
                height: 300px;
                position: absolute;
                bottom: -80px;
                left: -80px;
            }
        }

        .info {
            width: 40%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .programDescription {
                font-size: 20px;
                line-height: 2;
            }

            .getStartedButton {
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

    .trainers {
        display: flex;
        gap: 50px;
        z-index: 1;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 100px;
    }

    @media (max-width: 1320px) {
        .workoutProgram {
            .info {
                .programDescription {
                    font-size: 16px;
                }
            }
        }
    }

    @media (max-width: 1040px) {
        .workoutProgram {
            .programTitle {
                .title {
                    font-size: 60px;
                    width: 240px;
                }

                .programImage {
                    bottom: 50px;
                    left: -70px;
                    height: 250px;
                }
            }
        }
    }

    @media (max-width: 680px) {
        .workoutProgram {
            gap: 20px;
            flex-direction: column;
            align-items: center;
            margin-bottom: 80px;

            .programTitle {
                height: 200px;
                text-align: center;

                .title {
                    font-size: 45px;
                    width: 100%;
                    text-align: center;
                }

                .programImage {
                    bottom: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 200px;
                }
            }

            .info {
                width: 100%;
                text-align: center;
                align-items: center;

                .programDescription {
                    font-size: 14px;
                    line-height: 1.5;
                }

                .getStartedButton {
                    padding: 15px;
                    width: 150px;
                }
            }
        }
    }

    @media (max-width: 420px) {
        .workoutProgram {
            .programTitle {
                width: 200px;

                .programImage {
                    bottom: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 180px;
                }
            }
        }
    }

    @media (max-width: 375px) {
        .workoutProgram {
            gap: 0px;

            .programTitle {
                width: 100%;

                .title {
                    font-size: 35px;
                }

                .programImage {
                    bottom: -20px;
                }
            }

            .info {
                programDescription {
                    margin: 0;
                }
            }
        }
    }
`

const Trainers = styled.div`

`