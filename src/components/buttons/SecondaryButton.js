import React from 'react';
import styled from "styled-components";
const theme = {
    secondary: {
        default: "#ffd3fd",
        border: "#ffd3fd",
        hover: "#e5bde3"
    }
};

const Button = styled.button`
background-color: ${(props) => theme[props.theme].default};
border-color:  ${(props) => theme[props.theme].border};
font-size: 20px;
text-transform: uppercase;
padding: 10px 20px;
border-radius: 10px;
margin: 10px 10px;
cursor: pointer;
&:hover {
    background-color: ${(props) => theme[props.theme].hover};
    }
`;
function SecondaryButton() {

    return (
        <div className='secondaryButton'>
            <div>
                <Button theme="secondary" id='secondaryButton'> Secondary </Button>
            </div>
        </div>
    )
}

export default SecondaryButton