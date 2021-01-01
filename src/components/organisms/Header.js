import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
// import MediaQuery from "react-responsive";
import SimpleMenu from '../molecules/SimpleMenu'
// import MenuItem from '@material-ui/core/MenuItem';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends React.Component {

    pcQuery = "(min-width:" + breakPoint.desktopMin + "px)";
    spQuery = "(max-width:" + breakPoint.desktopMin + "px)";

    render() {
        return (
            <Head>
                <Title><AnchorLink href="#top" offset="50">Choyo Matsuta Portfolio</AnchorLink></Title>
                {/* モバイル表示 */}
                <MediaQuery query={this.spQuery} >
                    <SimpleMenu />
                </MediaQuery>

                {/* PC表示 */}
                <MediaQuery query={this.pcQuery} >
                    <Gmenu>
                        <MenuItem><AnchorLink href="#top" offset="50">Top</AnchorLink></MenuItem>
                        <MenuItem><AnchorLink href="#profile" offset="50">Profile</AnchorLink></MenuItem>
                        <MenuItem><AnchorLink href="#contact" offset="50">Contact</AnchorLink></MenuItem>
                    </Gmenu>
                </MediaQuery>
            </Head>
        );
    }
}

const Head = styled.header`
    background-color: #131A29CC;
    display:flex;
    position: fixed;
    justify-content:space-between;
    align-items:center;
    padding:8px;
    width: 100%;
    z-index:1;

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding:16px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        
    }
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #fafafa;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 20px;
    }
`;

const Gmenu = styled.ul`
    li {
        display: inline;
        color: #fafafa;
    }
`;

export default Header;