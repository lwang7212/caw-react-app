import React, { Component } from 'react'
import styled from 'styled-components'
import SVGInline from 'react-svg-inline'

const StyledIconWrapper = ({
  activeStyle,
  inactiveStyle,
  isOpen,
  children,
  ...rest
}) => {
  const I = styled.i`
    ${isOpen ? activeStyle : inactiveStyle};
    &:hover {
      ${activeStyle};
    }
  `;
  return <I {...rest}>{children}</I>
};

const StyledText = styled.div`
  font-size: 9px;
  line-height: 10px;
  margin-top: 4px;
  padding: 0;
`;

export class IconContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mouseover: false
    }
  }
  render () {
    const {
      text,
      regulateSize,
      suppressIconStyles,
      icon,
      width,
      title,
      ...rest
    } = this.props;

    const regulateSizeStyle = regulateSize
      ? { fontSize: regulateSize + 'em' }
      : null;

    const currentIcon = icon ? (
      <StyledIconWrapper {...rest}>
        <SVGInline svg={icon} accessibilityLabel={title} width={width + 'px'} />
      </StyledIconWrapper>
    ) : (
      <StyledIconWrapper {...rest} style={regulateSizeStyle} />
    );

    return text ? (
      <span>
        {currentIcon}
        <StyledText>{text}</StyledText>
      </span>
    ) : (
      currentIcon
    )
  }
}
