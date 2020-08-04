import React, { Component} from 'react';
import axios from '../../axios';
import styles  from './Blog.module.css';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch,Redirect } from 'react-router-dom';
import NewPost from "./NewPost/NewPost";
class Blog extends Component {
    state={
        auth:false
    }
    render () {
        return (
            <div className={styles.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                /*activeclassName='my-active'
                                activeStyles={
                                    {
                                        color:'#fa923f'

                                    }
                                }*/
                            >Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname:'/new-post',
                                    hash:'#submit',
                                    search:'?quick-submit=true'
                                }
                            }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>

                    {this.state.auth ? <Route path="/new-post" component={NewPost}/>:null}
                    <Route path="/posts"  component={Posts}/>
                  <Redirect from ="/" to ="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;