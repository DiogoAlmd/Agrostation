import React from "react"
import styled from "styled-components/native"
import { colors } from "../../../assets/colors"

export const Wrapper = styled.View`
      height: "100%";
      width: "100%";
      backgroundColor: ${colors.secondaryColor};
      flex: 1;
      justifyContent: "center";
      alignItems: "center";
      gap: 20px;
`


export const Container = styled.View`
  flex: ${props => props.flex};
  gap: ${props => props.gap};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  margin-top: ${props => props.marginTop};
`