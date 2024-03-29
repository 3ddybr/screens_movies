import styled from 'styled-components'

import * as Progress from '@radix-ui/react-progress'
import { styled as styledRadix } from '@stitches/react'
import { red, gray } from '@radix-ui/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  max-width: 28.5rem;
  max-height: 16rem;

  h1 {
    width: 100%;
    position: absolute;
    font-size: 1.5rem !important;

    padding-left: 1rem;
    bottom: 10%;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme['yellow-500']};
    background-color: ${({ theme }) => theme['red-900']};
    padding: 0.5rem;
    border-bottom-left-radius: 50%;
  }

  img {
    width: 100%;
    /* height: fit-content; */
    overflow: hidden;
    /* max-width: 28.5rem; */
    /* max-height: 16rem; */
    margin-bottom: 0.8rem;
  }

  /* border: 1px solid white; */

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

// styled do Radix-ui inicio

export const ProgressRoot = styledRadix(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: gray.gray11,
  borderRadius: '99999px',
  width: 175,
  height: 3,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',
})

export const ProgressIndicator = styledRadix(Progress.Indicator, {
  backgroundColor: red.red11,
  width: '80%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

// styled do  Radix-ui fim
