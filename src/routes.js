import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import PageNotFound from "./components/PageNotFound";

export const routes = [
    { path : "/", component : Posts, name : "homepage"},
    { path : "/new", component : NewPost, name : "newPost"},
    { path : "/:id", component : PostDetail, name : "post_detail"},
    { path: "*", component: PageNotFound }
  ]