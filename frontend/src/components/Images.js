import React from 'react'

const Images = (props) => {
  return (
    <>
      {props.person.map((image, index) => (
        <div className="card" key={index}>
          <div className="imageDiv">
            <img
              src={image.media.m}
              alt="movie"
              className="imageDimensions"
            ></img>
          </div>
          <div className="imageTitle">
            <h3>
              {image.title == ' ' && (
                <span>
                  <a href={image.link} target="_blank" rel="noreferrer">
                    View photo
                  </a>
                </span>
              )}
              <a href={image.link} target="_blank" rel="noreferrer">
                {image.title}
              </a>
            </h3>
          </div>
          <div className="imageAuthor">
            <p>
              by{' '}
              <a
                href={'//www.flickr.com/people/' + image.author_id}
                target="_blank"
                rel="noreferrer"
              >
                {image.author.match(/"(.*?)"/)[1]}
              </a>
            </p>
          </div>
          <div className="imageDescription">
            <p>
              Description:
              <span>{image.description.replace(/<\/?[^>]+>/gi, '')}</span>
            </p>
          </div>
          <div className="imageTags">
            <p>
              Tags:
              {image.tags == '' && <span> No tags specified</span>}
              <span> #{image.tags.split(' ').join(', #')}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Images
