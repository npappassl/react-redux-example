import React from 'react';

export default class NoteList extends React.PureComponent{
    render(){
        return(
            <ul>
                {this.props.notes.map((note)=>{
                    return (
                        <li>
                            {note.content + ", " + note.author + ", " + note.dateTime}
                            <button value="Delete"></button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
