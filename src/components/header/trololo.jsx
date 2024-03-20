import styled from "styled-components";
import { ThemeTogglerButton } from "../theme-toggler-button";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Container
            style={{
                color: theme.color
            }}
        >
            <h2 className="title">Workout</h2>
            <nav className="navBar">
                <button className={`hamburguerButton ${isClicked ? "clicked" : ""}`} style={{ color: theme.color }} onClick={handleButtonClick}>
                    <FontAwesomeIcon className="icon" icon={isClicked ? faTimes : faBars} />
                </button>
                <ul
                    className={`list ${isClicked ? "clicked" : ""}`}
                    style={{
                        backgroundColor: `${isClicked ? theme.backgroundColor : ""}`,
                        border: `${isClicked ? `1px solid ${theme.color}` : ""}`,
                        transition: ".3s"
                    }}
                >
                    <li className="item">
                        <ThemeTogglerButton />
                    </li>
                    <li className="item">
                        <a className="link" style={{ color: theme.color }} href="#">
                            Exercises
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" style={{ color: theme.color }} href="#">
                            Trainers
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" style={{ color: theme.color }} href="#">
                            Pricing
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" style={{ color: theme.color }} href="#">
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    transition: 0.3s;
    width: 100%;
    margin-bottom: 80px;
    max-width: 1440px;

    .navBar {
        position: relative;

        .hamburguerButton {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            transition: 0.3s;
            &.clicked {
                transform: rotate(90deg); // Adiciona uma rotação quando o botão é clicado
            }
        }

        .list {
            display: flex;
            gap: 20px;
            font-size: 12px;
            align-items: center;
            transition: 0.5s;

            .item {
                font-weight: 500;

                .link {
                    transition: 0.3s;
                    padding: 5px;
                    border-radius: 5px;

                    &:hover {
                        background-color: #25ab75;
                    }
                }
            }
        }
    }

    @media (max-width: 560px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;

        .navBar {
            .list {
                gap: 15px;
            }
        }
    }

    @media (max-width: 375px) {
        .navBar {
            display: flex;
            gap: 10px;
            width: 140px;
            height: 30px;

            .hamburguerButton {
                display: block;
                order: 2;
                padding: 10px;
                border-radius: 8px;
                background-color: red;
                height: fit-content;
                position: absolute;
                right: 0;
                top: -10px;
                width: 45px;
                transition: 0.3s;

                .icon {
                    font-size: 28px;
                    transition: 0.3s;
                }

                &:hover > .icon {
                    opacity: 0.8;
                    filter: drop-shadow(0 0 10px);
                }
            }

            .list {
                flex-direction: column;
                padding: 10px;
                height: 40px;
                overflow: hidden;
                position: absolute;
                z-index: 2;
                left: 0;
                top: -10px;
                border-radius: 8px;
                border: 1px solid transparent;
            }

            .list.clicked {
                height: 170px;
            }
        }
    }
`;
