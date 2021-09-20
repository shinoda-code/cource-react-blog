import './SinglePost.css';

function SinglePost() {
  return (
    <div className='singlePost'>
     <div className="singlePostWrapper">
       <img src="http://placehold.it/300x200/e8117f/fff" alt="" className="singlePostImg" />
       <h1 className="singlePostTitle">
       笠地蔵
       <div className="singlePostEdit">
          <i className="singlePostIcon fas fa-edit"></i>
          <i className="singlePostIcon fas fa-trash-alt"></i>
       </div>
       </h1>
       <div className="singlePostInfo">
         <span className='singlePostAutor'>Autor: <b>Manju</b></span>
         <span className='singlePostDate'>1 hour ago</span>
       </div>
       <p className='singlePostDesc'>
        年も暮れようとする頃の話。
        雪深い山の中に住む夫婦は、正月を迎えるにも米一粒すら残っていなかった。そこで女房が作った髪飾りのかせ玉を町に売りに行くことにした。
        男が地蔵峠を通ると、お地蔵様の頭の上に雪が積もっていたので雪を払ってあげた。大晦日の夕方、町についた男はそこでかせ玉を売るが、一向に売れない。と、そこに笠売りのおじいさんがやってきた。笠売りのおじいさんもまったく笠が売れないので、二人はそれぞれの売り物を交換することにして家路についた。
        その途中、男がまた地蔵峠を通ると、お地蔵様は寒そうに佇んでいる。やさしい男はお地蔵様の頭に笠をかぶせてあげた。そして家に帰り、そのことを女房に話すと、それは良いことをしたと言い、女房も喜んだ。
        さて、その夜夫婦が寝ていると、外で物音がする。出てみるとそこには米・野菜・果物・着物などがたくさん置いてあった。二人の目には、遠くに峠のお地蔵様が帰って行くのが見えた。こうして二人は無事に正月を迎えることができた。
       </p>
     </div>
    </div>
  )
}

export default SinglePost


