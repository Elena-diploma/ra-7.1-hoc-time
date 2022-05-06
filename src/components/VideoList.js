import React from 'react';
import Video from './Video';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default function VideoList(props) {
    return props.list.map((item) => (
        <Video
            key={nanoid(5)}
            url={item.url}
            date={item.date}
        />
    ));
}
VideoList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        })
    )
}