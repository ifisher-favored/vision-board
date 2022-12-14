import React from 'react';
//import Title from './Title';
import Photo from "./Photo";
import PropTypes from 'prop-types';
 import {Link} from 'react-router-dom'

function QuickappPhoto(props) {
    return <div>

            <Link className='addIcon' to='/AddPhoto'>+</Link>
             <div className='photoGrid' >
             {props.posts
                .sort(function(x,y) {
                    return y.id - x.id
                })
                .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
        </div>
}

QuickappPhoto.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default QuickappPhoto;

 // <button onClick={props.onNavigate} className='addIcon'>+</button>
 //onClick={props.onNavigate}