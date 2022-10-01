import React from 'react';

const Post = ({ facebookicon, heading, date, textpost, imagepost, likeemoji, heratemoji,
  countshare, like, comment, share, committext, older, usericon, commenttext }) => (


  <div className="wrapper">
    <div className="post">
      <div className="user-post">
        <img src={facebookicon} alt='' width={60} height={60} />
        <div className='userposttext'>
          <h4>{heading}</h4>
          <span>{date}</span>
        </div>
      </div>

      <div className="text-post">
        {textpost}
      </div>

      <div className="image-post">
        <img src={imagepost} alt='' height={600} width={30} />
      </div>

      <div className="userlike-post">
        <div className="emoji">
          <img src={likeemoji} alt='' width={30} />
          <img src={heratemoji} alt='' width={30} />
        </div>
      </div>

      <div className="share">
        <span> {countshare}</span>
      </div>

      <div className='likecommentshare-post'>
        <button><img src={like} width={20} alt='' />like</button>
        <button><img src={comment} width={20} alt='' />comment</button>
        <button><img src={share} width={20} alt='' />share</button>
      </div>

      <div className='commit-post'>
        <div className='commit-text'>
          <p>{committext}</p>
          <span>{older}</span>
        </div>

        <div className='commit-user'>
          <img src={usericon} alt="" />
          <h4>user</h4>
        </div>
        <p>{commenttext}</p>

      </div>


    </div>
  </div>

)

const FacebookPost= () => (
  <div>
    <Post

      facebookicon="https://img.icons8.com/color/48/000000/facebook-new.png"
      heading="facebook"
      date="sep 1"
      textpost="Albert's History of English Literature has won for itself a secure place as a study of
    literary history and criticism. Its continued popularity suggests that the value of its
    judgments remains for the most part unimpaired."

      imagepost='https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/279965926_10161400496966729_3439586447701510754_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ivfqKmFSroAX_xH9US&_nc_ht=scontent.fkhi8-1.fna&oh=00_AT-gtAl5S2hMiVp9QTSLYQ9t5a-0WlfP1KA0ZUtfeN39DA&oe=631F3313'
      likeemoji='https://img.icons8.com/ios/50/000000/facebook-like--v1.png'
      heratemoji='https://img.icons8.com/emoji/48/000000/heart-decoration.png'
      countShare='5share'
      like='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png'
      comment='https://img.icons8.com/ios/50/000000/comments.png'
      share='https://img.icons8.com/small/16/000000/share.png'
      committext='View previous comments'
      older="Oldest"
      username="CK Kanita"
      usericon='https://img.icons8.com/fluency/48/000000/user-male-circle.png'
      commenttext='Great! '
    />

<Post

facebookicon="https://img.icons8.com/color/48/000000/facebook-new.png"
heading="facebook"
date="sep 1"
textpost="Albert's History of English Literature has won for itself a secure place as a study of
literary history and criticism. Its continued popularity suggests that the value of its
judgments remains for the most part unimpaired."

imagepost='https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/279965926_10161400496966729_3439586447701510754_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ivfqKmFSroAX_xH9US&_nc_ht=scontent.fkhi8-1.fna&oh=00_AT-gtAl5S2hMiVp9QTSLYQ9t5a-0WlfP1KA0ZUtfeN39DA&oe=631F3313'
likeemoji='https://img.icons8.com/ios/50/000000/facebook-like--v1.png'
heratemoji='https://img.icons8.com/emoji/48/000000/heart-decoration.png'
countShare='5share'
like='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png'
comment='https://img.icons8.com/ios/50/000000/comments.png'
share='https://img.icons8.com/small/16/000000/share.png'
committext='View previous comments'
older="Oldest"
username="CK Kanita"
usericon='https://img.icons8.com/fluency/48/000000/user-male-circle.png'
commenttext='Great! '
/>

<Post

      facebookicon="https://img.icons8.com/color/48/000000/facebook-new.png"
      heading="facebook"
      date="sep 1"
      textpost="Albert's History of English Literature has won for itself a secure place as a study of
    literary history and criticism. Its continued popularity suggests that the value of its
    judgments remains for the most part unimpaired."

      imagepost='https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/279965926_10161400496966729_3439586447701510754_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ivfqKmFSroAX_xH9US&_nc_ht=scontent.fkhi8-1.fna&oh=00_AT-gtAl5S2hMiVp9QTSLYQ9t5a-0WlfP1KA0ZUtfeN39DA&oe=631F3313'
      likeemoji='https://img.icons8.com/ios/50/000000/facebook-like--v1.png'
      heratemoji='https://img.icons8.com/emoji/48/000000/heart-decoration.png'
      countShare='5share'
      like='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png'
      comment='https://img.icons8.com/ios/50/000000/comments.png'
      share='https://img.icons8.com/small/16/000000/share.png'
      committext='View previous comments'
      older="Oldest"
      username="CK Kanita"
      usericon='https://img.icons8.com/fluency/48/000000/user-male-circle.png'
      commenttext='Great! '
      />
      
  </div>

)











