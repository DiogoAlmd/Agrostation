import React from "react"
import { TextInput } from "react-native"
import styled from "styled-components/native"

export const Input = styled.TextInput`
    height: ${props => props.height};
    width: ${props => props.width};
    borderColor: ${props => props.borderColor};
    borderWidth: ${props => props.border};
    borderRadius: ${props => props.borderRadius};
    padding: 15;
    placeholderTextColor: ${props => props.placeholderColor};
    backgroundColor: ${props => props.backgroundColor};
`