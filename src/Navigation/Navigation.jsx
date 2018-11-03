
import React, { Component } from 'react'
import {
    StyledNavigationButton,
    NavigationButtonContainer
} from 'buttons'
import {
    StyledSidebar,
    StyledDrawer,
    StyledTabsWrapper,
    StyledTopNav,
    StyledBottomNav
} from './styled'

const Closing = 'CLOSING'
const Closed = 'CLOSED'
const Open = 'OPEN'
const Opening = 'OPENING'

class Navigation extends Component {
    state = {}
    constructor (props) {
        super(props)
        this._onTransitionEnd = this.onTransitionEnd.bind(this)
    }
    componentDidMount () {
        this.setState({
            transitionState: Closed
        })
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.openDrawer !== this.props.openDrawer) {
            var newState = {}
            if (nextProps.openDrawer) {
                newState.drawerContent = nextProps.openDrawer
                if (
                    this.state.transitionState === Closed ||
                    this.state.transitionState === Closing
                ) {
                    newState.transitionState = Opening
                }
            } else {
                newState.drawerContent = ''
                if (
                    this.state.transitionState === Open ||
                    this.state.transitionState === Opening
                ) {
                    newState.transitionState = Closing
                }
            }
            this.setState(newState)
        }
    }

    onTransitionEnd () {
        if (this.transitionState === Closing) {
            this.setState({
                transitionState: Closed,
                drawerContent: null
            })
        }
        if (this.transitionState === Opening) {
            this.setState({
                transitionState: Open
            })
        }
    }

    render () {
        let { onNavClick, topNavItems, bottomNavItems = [] } = this.props

        const buildNavList = (list, selected) => {
            return list.map((item, index) => {
                const isOpen = item.name.toLowerCase() === selected
                return (
                    <NavigationButtonContainer
                        title={item.title}
                        data-test-id={'drawer' + item.name}
                        key={item.name}
                        onClick={() => onNavClick(item.name.toLowerCase())}
                        isOpen={isOpen}
                    >
                        <StyledNavigationButton name={item.name}>
                            {item.icon(isOpen)}
                        </StyledNavigationButton>
                    </NavigationButtonContainer>
                )
            })
        }
        const getContentToShow = openDrawer => {
            if (openDrawer) {
                let filteredList = topNavItems.concat(bottomNavItems).filter(item => {
                    return item.name.toLowerCase() === openDrawer
                })
                let TabContent = filteredList[0].content
                return <TabContent />
            }
            return null
        }
        const topNavItemsList = buildNavList(topNavItems, this.state.drawerContent)
        const bottomNavItemsList = buildNavList(
            bottomNavItems,
            this.state.drawerContent
        )

        return (
            <StyledSidebar>
                <StyledTabsWrapper>
                    <StyledTopNav>{topNavItemsList}</StyledTopNav>
                    <StyledBottomNav>{bottomNavItemsList}</StyledBottomNav>
                </StyledTabsWrapper>
                <StyledDrawer
                    open={
                        this.state.transitionState === Open ||
                        this.state.transitionState === Opening
                    }
                    ref={ref => {
                        if (ref) {
                            // Remove old listeners so we don't get multiple callbacks.
                            // This function is called more than once with same html element
                            ref.removeEventListener('transitionend', this._onTransitionEnd)
                            ref.addEventListener('transitionend', this._onTransitionEnd)
                        }
                    }}
                >
                    {getContentToShow(this.state.drawerContent)}
                </StyledDrawer>
            </StyledSidebar>
        )
    }
}

export default Navigation
