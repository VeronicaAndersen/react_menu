import React from 'react';
import styled from "styled-components";
const theme = {
    primary: {
        default: "#cae7e3",
        border: "#cae7e3",
        hover: "#b5cfcc"
    }
};
/**
 * Styling my primary button
 * ! Just the primary one
 * ? Check if it´s okay colors
 * todo: Check if it´s possible to style it globally
 */
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
function PrimaryButton() {
    
    return (
        <div className='primaryButton'>
            <div>
                <Button theme="primary" id='primaryButton'> Primary </Button>
            </div>
        </div>
    )
}

export default PrimaryButton