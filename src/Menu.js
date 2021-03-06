/**
 * Menu Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import RcMenu from 'rc-menu';

class Menu extends React.Component {
    render() {
        if (this.props.mode === 'inline') {
            return <RcMenu {...this.props} />;
        } else {
            return <RcMenu {...this.props} />;
        }
    }
}

Menu.defaultProps = {
    prefixCls: 'kuma-menu'
};
Menu.propTypes = {
    prefixCls: React.PropTypes.string
};

Menu.Divider = RcMenu.Divider;
Menu.Item = RcMenu.Item;
Menu.SubMenu = RcMenu.SubMenu;

export default Menu;
