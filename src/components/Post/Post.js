import React from 'react';
import './Post.css';
import { CommentList } from '../';

class Post extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            postInfo: {
                title: null,
                body: null,
                comments: []
            },
            animate: false,
            direction: 'left'
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const {title, body, comments} = nextProps;

        if (this.props.postId !== nextProps.postId) {
            const direction = this.props.postId < nextProps.postId ? 'left' : 'right';

            this.setState({
                direction,
                animate: true
            });

            setTimeout(
                () => {
                    this.setState({
                        postInfo: {
                            title, body, comments
                        },
                        animate: false
                    })
                }
            , 500);

            return ;
        }

        this.setState({
            postInfo: {
                title, body, comments
            }
        });
    }
    

    render() {
        const {title, body, comments} = this.state.postInfo;
        const {direction, animate} = this.state;

        const animation = animate ? (direction === 'left' ? 'bounceOutLeft' : 'bounceOutRight') : (direction === 'left' ? 'bounceInRight' : 'bounceInLeft');

        if (title == null) return null;

        return (
            <div className={`Post animated ${animation}`}>
                <h1>{title}</h1>
                <p>
                    {body}
                </p>
                <CommentList comments={comments}/>
            </div>
        );
    }
}

export default Post;