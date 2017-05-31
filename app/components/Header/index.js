import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import SearchFilterInput from 'components/SearchFilterInput';

import messages from './messages';
import user_icon from './images/user_icon.svg';
import search_icon from './images/search_icon.svg';
import log_out_icon from './images/log_out_icon.svg';


const HeaderDiv = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    color: white;
    background-color: #231f20;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 40px;
    z-index: 2;
`;
const NavUl = styled.ul`
    list-style: none;
    display: inline-block;
    margin: 0 10px 0 -30px;
`;
const NavLi = styled.li`
    display: inline-block;
    padding: 10px;
    font-size: 15px;
    line-height: 20px;
`;
const LogoSpan = styled.span`
    font-weight: 200;
    line-height: 20px;
    padding: 10px 20px 10px;
    margin-left: -20px;
`;
const NavRightSpan = styled.span`
    float: right;
    line-height: 24px;
    height: 40px;
`;
const SearchSpan = styled.span`
    vertical-align: middle;
`;
const AdvancedSearchAnchor = styled.a`
    font-size: 14px;
    vertical-align: super;
    display: inline-block;
    margin-left: 10px;

    :hover{
        text-decoration: underline;
    }
`;
const SessionSpan = styled.span`
    font-size: 15px;
    vertical-align: middle;
`;
const NavBarIconImg = styled.img`
    margin-left: 10px;
`;
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <HeaderDiv>
                <a href="/cat-webapp/#/">
                    <LogoSpan>CAT</LogoSpan>
                </a>
                <NavUl>
                    <NavLi>
                        <a href="/cat-webapp/#/applications">
                            <FormattedMessage {...messages.applications} />
                        </a>
                    </NavLi>
                    <NavLi>
                        <a href="/cat-webapp/#/interviews">
                            <FormattedMessage {...messages.interviews} />
                        </a>
                    </NavLi>
                    <NavLi>
                        <a href="/cat-webapp/#/scheduleinterview">
                            <FormattedMessage {...messages.scheduleInterview} />
                        </a>
                    </NavLi>
                    <NavLi>
                        <FormattedMessage {...messages.management} />
                    </NavLi>
                </NavUl>
                <NavRightSpan>
                    <SearchSpan>
                        <SearchFilterInput placeholder="Search Applications..."/>
                        <img src={search_icon} height="20" />
                        <AdvancedSearchAnchor href="/cat-webapp/#/advancedSearch"><FormattedMessage {...messages.advancedSearchAnchorTxt} /></AdvancedSearchAnchor>
                    </SearchSpan>
                    <SessionSpan>
                        <NavBarIconImg src={user_icon} width="18"/>
                            {this.props.user.fullName||""}
                        <NavBarIconImg src={log_out_icon} width="24" />
                    </SessionSpan>
                </NavRightSpan>
            </HeaderDiv>
        );
    }
}
export default Header;
