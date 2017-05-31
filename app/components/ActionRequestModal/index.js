import React from 'react';
import styled from 'styled-components';

import types from 'actions/types';
import Button from 'components/Button';

const Modal = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    margin:0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.2);
    z-index: 2;
`;
const ActionFormDiv = styled.div`
    background-color: white;
    border: solid 1px lightgrey;
    height: 400px;
`;
export default class ActionRequestModal extends React.Component{
    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal(){
        this.props.dispatch({
            type: types.CLOSE_MODAL
        });
    }
    render(){
        if(this.props.show.newRequest===true){
            return (
                <Modal>
                    <ActionFormDiv>
                        <h1>Add New Request</h1>
                        <form>
                            <label>Request Title</label>
                            <input></input>
                            <label>Assign To</label>
                            <input></input>
                            <label>Body</label>
                            <input></input>
                            <Button value="Save" />
                            <Button onClick={this.closeModal} value="Cancel" />
                        </form>
                    </ActionFormDiv>
                </Modal>
            );
        } else {
            return (<div></div>)
        }
    }
}
