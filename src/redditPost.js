import React from 'react';

export default (props) =>  {
    return (
        <div className="reddit-post">
            <a href={props.link}>{props.title}</a>
            <p>{props.commentCount} Comments</p>
            <p>{props.minutesAgo} Minutes Ago</p>
        </div>
    )
}