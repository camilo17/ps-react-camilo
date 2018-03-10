import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TabList from './TabList';
import TabPanels from './TabPanels';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        }
    }


    changeTab = (index) => {
        this.setState((prevState) => {
            return {activeIndex: index}
        })
    }

    render() {

        const children = React.Children.map(this.props.children, (child) => {
            if(child.type === TabPanels) {
                return React.cloneElement(child, {
                    activeIndex: this.state.activeIndex
                })
            } else if (child.type === TabList ){
                return React.cloneElement(child, {
                    activeIndex: this.state.activeIndex,
                    onActiveTab: (index) => {
                        this.changeTab(index);
                    }
                })
            } else {
                return child;
            }
        })






        return (
            <div>
                {children}
            </div>
        )
    }
    



}



export default Tabs;