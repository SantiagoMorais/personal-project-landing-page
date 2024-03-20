import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context.jsx"
import styled from "styled-components";

export const Button = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <TogglerButton
            {...props}
            style={{
                color: theme.backgroundColor,
                backgroundColor: theme.color,
            }}
        />
    )
}

const TogglerButton = styled.button`
    border: none;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        opacity: .6;
    }
`