import React, { Component } from 'react';
import './Sidebar.css'

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    
      render() {
        return (
          <div
            sidebar={<b>Sidebar content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            <button className='sideBarButton' onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          </div>
        );
      }
}

export default SideBar