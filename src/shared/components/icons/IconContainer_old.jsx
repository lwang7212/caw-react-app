/**
 * 图标容器
 */
import React, {Component} from 'react';
import styled from 'styled-components';

/**
 * 文本样式
 */
const StyledText = styled.div`
  font-size: 9px;
  line-height: 10px;
  margin-top: 4px;
  padding: 0;
`;
/**
 * 图标容器样式
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
const ContainerDiv = styled.div`
  font-size:12px;
  line-height: 10px;
  margin-top: 4px;
  padding: 0;
  text-align: center;
  width: ${props => props.theWidth ? props.theWidth : "64px"};
  height: ${props => props.Height ? props.Height : "96px"};  
`;

const StyledIconWrapper = ({
                               activeStyle,
                               inactiveStyle,
                               isOpen,
                               children,
                               ...rest
                           }) => {
    const I = styled.i`
     fill: orange;
     width: 64px;
     height: 64px;  
    ${isOpen ? activeStyle : inactiveStyle};
    &:hover {
      fill: blue;
    }
  `;
    return <I {...rest}>{children}</I>
};

export  default      class    extends Component {
    render() {
        const {
            text,
            icon,
            children,
            ...rest
        } = this.props;

        const  Icon=icon;
        return text ? (
            <ContainerDiv {...rest}>
                <Icon />
                <StyledText>{text}</StyledText>
            </ContainerDiv>
        ) : (
            <ContainerDiv>
                <Icon />
            </ContainerDiv>
        )
    }
}

