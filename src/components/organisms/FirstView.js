import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
import Icon from '../atoms/Icon'
import LinkArea from '../molecules/LinkArea'
import ProfleImage from '../../assets/images/profileImg.jpg'
import ScrollImage from '../../assets/images/scrollIcon.png'
import BackGround from '../../assets/images/first-view-bg.jpg'
// import AnchorLink from 'react-anchor-link-smooth-scroll';

class FirstView extends React.Component {
    render() {
        return (
            <FView id='top'>
                <Catch>Welcome To My Portfolio!</Catch>

                <FlexBox>
                    <NameArea>
                        <Icon image={ProfleImage}/>
                        <Name>Choyo Matsuta</Name>
                    </NameArea>

                    <LinkAreaWrapper>
                        <LinkArea />
                    </LinkAreaWrapper>
                </FlexBox>

                <ScrollIconWrapper>
                    <ScrollText>Scroll!</ScrollText>
                    <ScrollIcon link='#profile' image={ScrollImage} />
                </ScrollIconWrapper>
            </FView>
        );
    }
}

class ScrollIcon extends React.Component {
    render() {
        return (
            <AnchorLink href={this.props.link} offset="50">
                <ScrollImg src={this.props.image} alt='scroll' />
            </AnchorLink>
        );
    }
}

const FView = styled.div`
    padding: 96px 8px 16px 8px;
    width: 100%;
    margin: 0 auto;
    background-image: url(${BackGround});
    background-size: cover;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        padding: 160px 0 32px 0;
    }
`;

const Catch = styled.h2`
    font-family: 'Caveat', cursive;
    font-size: 32px;
    font-weight: bold;
    color:#fafafa;
    text-align: center;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 48px;
    }
`

const NameArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px auto 0 auto;

    img {
        margin-right: 16px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        flex-direction: column;
        margin: 0 48px 0 0px;

        img {
            margin: 8px;
        }
    }
`;

const Name = styled.p`
    font-family: 'Caveat', cursive;
    font-size: 20px;
    color: #fafafa;
    text-align: center;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 24px;
    }
`;

const FlexBox = styled.div`

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 64px;
    }
`;

const ScrollIconWrapper = styled.div`
    margin: 64px auto 0 auto;
    text-align: center;
`;

const ScrollText = styled.p`
    color: #fafafa;
    font-size: 20px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 24px;
    }
`;


const ScrollImg = styled.img`
    width: 32px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        width: 64px;
    }
`;

const LinkAreaWrapper = styled.div`
    margin-top: 32px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        margin-top: 0;
    }
`;

export default FirstView;