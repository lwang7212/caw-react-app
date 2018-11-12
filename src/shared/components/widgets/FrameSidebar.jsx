/**
 * 框架标题
 */
import React from 'react'
import { StyledFrameSidebar } from './styled'

const FrameSidebar = props => {
  if (!props || !props.children) return null
  return <StyledFrameSidebar>{props.children}</StyledFrameSidebar>
};

export default FrameSidebar
