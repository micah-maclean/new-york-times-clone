function Article({title, abstract, image}) {
    return (
      <article>
          <h2>{title}</h2>
          <p>{abstract}</p>
          <hr />
          <img src={image} />
      </article>
    )
  }
  
  export default Article