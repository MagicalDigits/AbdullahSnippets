// https://rightaboutnow.com/album01 page has a carousel so I tried to apply programming logic to copy salman's behaviour on JUMBOS, 
// I was successfull but then I found out React-Bootstrap has a built-in prop for this

const [selectedPhoto, setSelectedPhoto] = useState(0)
  console.log(selectedPhoto, content.photos.length);
  setTimeout(() => {
    selectedPhoto <= content.photos.length-2 ?
      setSelectedPhoto(selectedPhoto += 1)
      : setSelectedPhoto(0)
  }
    , 3000)
//content.photos contains response in form of an array of album photos
