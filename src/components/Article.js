import React from "react";



function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {/* {date}.{emojis} {minutes} min read */}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;