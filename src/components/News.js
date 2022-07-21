import moment from 'moment';
function news({title, abstract, url, image, caption, copyright, byline, publishedDate}) {
  return (
    <article>
        <figure>
            <a href={url}>
                <img src={image} alt={caption}/>
            </a>
            <figcaption>
                {copyright}
            </figcaption>
        </figure>
        <div>
            <h2>
                <a href={url}>
                    {title}
                </a>
            </h2>
            <p>{abstract}</p>
            <p>
                <span>{moment(publishedDate).fromNow()}</span>
                <span>{byline}</span>
            </p> 
        </div>       
    </article>
  )
}
export default news