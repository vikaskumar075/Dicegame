import styled from "styled-components";

export const Button=styled.button`
min-width: 220px;
padding:10px 18px;
background-color: black;
color: white;
border-radius: 5px;
font-size: 16px;
border: none;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`
// uper wali ki sari property niche agayi
export const OutlineButton=styled(Button)`

border: 1px solid black;
background-color: white;
color: black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`