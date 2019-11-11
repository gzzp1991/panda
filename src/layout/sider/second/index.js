import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
// import Icon from 'component/icon';
import SiderThird from '../third';
import './index.less';

@withRouter
class LayoutSiderSecond extends PureComponent {
  onClick = (child, path) => {
    const { history } = this.props;
    if (!child) {
      history.push(path);
    }
  };

  render() {
    const { routes, path } = this.props;

    return (
      <div className="layout-sider-second">
        {Object.keys(routes).map((r, i) => {
          const now = routes[r];
          const nChild = now.child;
          return (
            <div className="layout-sider-second-item" key={r}>
              <div className="layout-sider-second-item-header now" onClick={()=>this.onClick(now.child, `${path}/${r}`)}>
                {now.name}
                {/* {nChild && (
                  <Icon
                    className="layout-sider-second-item-header-icon"
                    type="icon-chevron-down"
                  />
                )} */}
              </div>
              {nChild && <SiderThird path={`${path}/${r}`} routes={nChild} />}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LayoutSiderSecond;
