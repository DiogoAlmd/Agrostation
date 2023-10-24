import React from "react"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: ${props => props.flex};
  gap: ${props => props.gap};
  marginBottom: ${props => props.marginBottom};
`