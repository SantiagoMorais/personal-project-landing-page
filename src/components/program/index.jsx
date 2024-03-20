import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Program = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <List>
            <li className="topic" style={{ color: theme.color, borderBottom: `1px solid ${theme.secondaryColor}` }}>
                <div className="class">
                    <p className="text" style={{ color: theme.textColor }}>{props.value}</p>
                    <div className="classDetails">
                        <h3 className="title">{props.title}</h3>
                        <p className="text" style={{ color: theme.textColor }}>{props.classesNumber} videos</p>
                    </div>
                </div>
                <div></div>
                <FontAwesomeIcon icon="fas fa-arrow-right" style={{ fontSize: "20px" }} />
            </li>
        </List>
    )
}

const List = styled.ul`
    display: flex;
    justify-content: center;

    .topic {
        display: flex;
        justify-content: space-between; 
        width: 100%;
        padding-bottom: 30px;
        margin-bottom: 30px;
        cursor: pointer;
        transition: .3s;
        max-width: 1440px;

        .class {
            display: flex;
            gap: 200px;

            .classDetails {
                .text {
                    font-weight: 500;
                }
            }
        }

        &:hover {
            opacity: .6;
        }
    }

    @media (max-width: 780px) {
        padding: 0 10px;

        .topic {
            .class {
                gap: 100px;
            }
        }
    }

    @media (max-width: 520px) {
        .topic {
            .class {
                gap: 50px;

                .title {
                    font-size: 16px;
                }
            }
        }
    }
`

Program.defaultProps = {
    value: "00",
    title: "Class Title",
    classesNumber: "00",
}