import './Post.css';

import React from 'react'

function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="http://placehold.it/500x300/e8117f/fff" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">こんにちは。Reactでブログサイトを作るレクチャ―やっています。</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
        <p className='postDesc'>こんにちは。Reactでブログサイトを作るレクチャ―やっています。Web制作的なアプローチで、ものすごくやりやすい。自分にもReactが理解出来そうな気がしてきた。本題はここからだろうけど、短期集中で頑張ろうと思います。
        こんにちは。Reactでブログサイトを作るレクチャ―やっています。Web制作的なアプローチで、ものすごくやりやすい。自分にもReactが理解出来そうな気がしてきた。本題はここからだろうけど、短期集中で頑張ろうと思います。</p>
      </div>
    </div>
  )
}

export default Post
