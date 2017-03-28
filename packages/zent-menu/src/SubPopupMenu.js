import React, { Component, PropTypes, Children } from 'react';
import CommonMenu from './CommonMenu';
import cx from 'zent-utils/classnames';
import noop from 'zent-utils/lodash/noop';



export default class PopupMenu extends CommonMenu {
  static propTypes = {
    prefix: PropTypes.string,
    visible: PropTypes.bool,
    onClick: PropTypes.func,
    index: PropTypes.string,
    overlayCx: PropTypes.string
  };

  handleClick = (e, index) => {
    const { onClick } = this.props;
    onClick(e, index);
  }

  renderSubMenuItems = (c, i) => {
    if (!c) {
      return null;
    }
    const { index } = this.props;
    return this.renderCommonMenuItem(c, i, index);
  }

  render() {
    const { children, prefix, visible, overlayCx } = this.props;
    return (
      <ul className={cx( `${prefix}-menu` ,`${prefix}-submenu-content`, overlayCx, {[`${prefix}-submenu-hidden`]: !visible})}>
        {React.Children.map(children, this.renderSubMenuItems)}
      </ul>
    );
  }
}