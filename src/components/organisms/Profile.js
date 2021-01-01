import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
import SectionTitle from '../atoms/SectionTitle'
import BackGround from '../../assets/images/section-bg.jpg'

class Profile extends React.Component {

    profileItem = [
        {
            title: 'Name',
            text: 'Choyo Matsuta',
        },
        {
            title: 'Career',
            text: 'Project Manager, Sr. ERP Consultant, Business System Architect',
        }
    ];

    render() {
        return (
            <ProfileContent id="profile">
                <SectionTitle title='Profile' />
                    {this.profileItem.map((listItem) => {
                        return <ProfileItem title={listItem.title} text={listItem.text}/>
                    })}
            </ProfileContent>
        );
    }
}

class ProfileItem extends React.Component {
    render() {
        return (
            <ItemWrapper>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </ItemWrapper>
        )
    }
}

const ProfileContent = styled.div`
    padding: 40px 8px;
    background-image: url(${BackGround});
    background-size: cover;

    h2 {
        text-align: center;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        padding: 64px 0;
    }
`;

const ItemWrapper = styled.div`
    margin: 32px auto 0 auto;
    max-width: 260px;
    width: 100%;
    
    h3 {
        color: #131A29;
        font-weight: bold;
    }

    p {
        padding-top: 8px;
    }
    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        margin: 32px auto 0 auto;
        max-width: 320px;
    
        h3 {
            font-size: 20px;
        }
    }
`;

export default Profile;