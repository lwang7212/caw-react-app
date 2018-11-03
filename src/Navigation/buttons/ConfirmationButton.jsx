/**
 * 确认按钮
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import {
  MinusIcon,
  RightArrowIcon,
  CancelIcon
} from '../icons/Icons'

const IconButton = styled.button`
  margin-left: 4px;
  border: 0;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

export class ConfirmationButton extends Component {
  constructor (props) {
    super(props);

    this.state = {
      requested: false
    }
  }

  componentWillMount () {
    this.confirmIcon = this.props.confirmIcon || <RightArrowIcon />;
    this.cancelIcon = this.props.cancelIcon || <CancelIcon />;
    this.requestIcon = this.props.requestIcon || <MinusIcon />
  }

  render () {
    if (this.state.requested) {
      return (
        <span>
          <IconButton
            onClick={() => {
              this.setState({ requested: false })
              this.props.onConfirmed()
            }}
          >
            {this.confirmIcon}
          </IconButton>
          <IconButton onClick={() => this.setState({ requested: false })}>
            {this.cancelIcon}
          </IconButton>
        </span>
      )
    } else {
      return (
        <IconButton onClick={() => this.setState({ requested: true })}>
          {this.requestIcon}
        </IconButton>
      )
    }
  }
}
