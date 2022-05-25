import React from 'react'
import Row from '../Item/Row'
import ChatAvatar from './ChatAvatar'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { grey } from '@mui/material/colors'
import { Grid, ListItemButton } from '@mui/material'
import Nav from '../Item/Nav'
import LinkFlex from '../Item/LinkFlex'
import ChatNavButton from '../Item/ChatNavButton'
import { BiSearch } from 'react-icons/bi'
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri'

const ChatHeader = () => {
    return (
        <Row>
            <Grid item xs={4}>
                <ChatAvatar />
            </Grid>
            <Grid item xs={8} sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
            }}>
                <nav>
                    <Row sx={{
                        width: '100%',
                        justifyContent: "end"
                    }}>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <BiSearch />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <IoCallOutline />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <AiOutlineVideoCamera />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <IoChatbubbleEllipsesOutline />
                            </LinkFlex>
                        </ChatNavButton>
                    </Row>
                </nav>
            </Grid>
        </Row>
    )
}

export default ChatHeader