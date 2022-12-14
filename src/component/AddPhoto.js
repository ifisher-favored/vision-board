
import React, { Component } from 'react'
class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }
    render() {
        return (
            <div>
                <h1> Photowall </h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Desciption" name="description" />
                        <button> Post </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto

// import React, { Component } from 'react';

// class AddPhoto extends Component {
//     constructor() {
//         super()
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const imageLink = e.target.elements.link.value
//         const description = e.target.elements.description.value
//         const post = {
//             id: Number(new Date()),
//             description: description,
//             imageLink: imageLink
//         }
//         if (description && imageLink) {
//             this.props.onAddPhoto(post)
//         }
//     }

//     render() {
//         return (

//             <div>
//                 <h1>Vision Board</h1>

//                 <div className='form'>
//                     <form onSubmit={this.handleSubmit}>
//                         <input type='text' placeholder='Link' name='link' />
//                         <input type='text' placeholder='Description' name='description' />
//                         <button>Post</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default AddPhoto;