import styled from '@emotion/styled'
import { Card } from '@mui/material'

export const ECCard = styled(Card)`
cursor: pointer;
transition: transform .2s;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`
