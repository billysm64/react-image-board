function ImageList(props) {

  const images = props.images.map((image, index) => (
    <li key={index}>
      <img src={image.url} alt="" />
      <p>{image.caption}</p>
    </li>
  ))

  return (
    <ul>{images}</ul>
  )
}

export default ImageList;
