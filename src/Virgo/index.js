import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Root, Header, Nav, Content, Footer } from './Layout';

const config = {
"navAnchor": "left",
"navVariant": {
  "xs": "persistent",
  "sm": "persistent",
  "md": "permanent"
},
"navWidth": {
  "xs": 240,
  "sm": 256,
  "md": 256
},
"collapsible": {
  "xs": true,
  "sm": true,
  "md": true
},
"collapsedWidth": {
  "xs": 64,
  "sm": 64,
  "md": 64
},
"clipped": {
  "xs": true,
  "sm": true,
  "md": true
},
"headerPosition": {
  "xs": "sticky",
  "sm": "relative",
  "md": "relative"
},
"squeezed": {
  "xs": true,
  "sm": true,
  "md": true
},
"footerShrink": {
  "xs": true,
  "sm": true,
  "md": true
}
};

const App = () => (
  <Root config={config} style={{ minHeight: "100vh" }}>
    <CssBaseline />
    <Header
      menuIcon={{
        inactive: <MenuIcon />,
        active: <ChevronLeftIcon />
      }}
    >
        {/* header goes here */}
    </Header>
    <Nav
      collapsedIcon={{
        inactive: <ChevronLeftIcon />,
        active: <ChevronRightIcon />
      }}
      header={
        // you can provide fixed header inside nav
        // change null to some react element
        ctx => null
      }
    >
      {/* nav goes here */}
    </Nav>
    <Content>
      {/* content goes here */}
    </Content>
    <Footer>{/* footer goes here */}</Footer>
  </Root>
)

export default App
