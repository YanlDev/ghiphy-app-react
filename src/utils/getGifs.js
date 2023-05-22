export const getGifs =  async( categories )=>{

  const url = `https://api.giphy.com/v1/gifs/search?key=2MYvlnmU4kOW9IVk90SxEIOeQufsKnkn&q=${categories}&limit=10`
  const getImage =  await fetch(url);
  const { data }  = await getImage.json()

  const dataImg = data.map(img=>({ 
    id:img.id,
    titulo: img.title,
    imagen: img.images.downsized_medium.url}
  ))
  console.log(dataImg)
  return dataImg;
}