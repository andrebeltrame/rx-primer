import React, { Component } from 'react';
import Card from '../../components/ui/Card'
import axios from 'axios';
import PostItem from '../../components/PostListItem'
import { Button } from '../../components/ui/Buttons'
import { Link } from 'react-router-dom'
const PostsAPI = 'https://raw.githubusercontent.com/andrebeltrame/recipe-json/master/posts.json';


class PostsPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        this.state = {
            posts: [],
            isLoading: false,
            error: null,
        };

        try {
            const result = await axios.get(PostsAPI);

            this.setState({
                posts: result.data.posts,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }

    render() {

        const { posts, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }



        return (
            <>
                <Card className="no-border">

                    <div className="grid-row">
                        <h2>Publicações</h2>

                        <Link to="/new-post">
                            <Button className="btn ButtonMd ColorSecundary mt-2"> Novo Post</Button>
                        </Link>
                    </div>


                    <ul className="postsList">
                    {posts.map((post, index) =>
                        <li key={index}>
                            <Link to={`post/${post.id}`} key={post.id}>
                                <h2>{post.title}</h2>
                            </Link>



                            <p>{post.content}</p>
                        
                        </li>
                    )}
                    </ul>


                </Card>
            </>
            )
    }

}

export default PostsPage;


