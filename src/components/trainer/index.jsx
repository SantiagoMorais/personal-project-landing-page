import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Trainer = (props) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div style={{color: theme.color}}>
            <Image src={props.src} alt={props.alt} />
            <h3>{props.name}</h3>
            <p
                style={{color: theme.textColor}}
            >Trainer</p>
        </div>
    )
}

const Image = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;

    @media (max-width: 420px) {
        width: 85vw;
        height: 400px;
    }
`
Trainer.defaultProps = {
    name: "Trainer's Name",
} 

 