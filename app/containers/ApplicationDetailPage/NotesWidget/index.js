import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import NoteList from './NoteList';

const Textarea = styled.textarea`
    display: block;
    box-shadow: 2px 2px 10px 3px grey;
    margin-bottom: 1em;
`;


export default class NotesWidget extends React.Component{
    render(){
        const { notes } = this.props;
        let noNoteSpanText = "";
        if(notes && notes.length===0){
            noNoteSpanText = "There are no notes associated with this application."
        }
        return (
            <div>
                <h2>Notes</h2>
                <span>{noNoteSpanText}</span>
                <NoteList notes={notes} />
                <Textarea rows="5" cols="50" />
                <Button value="save note" />
            </div>
        );
    }
}
