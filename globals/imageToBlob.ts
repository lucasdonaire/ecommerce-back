import axios from "axios";

async function imageUrlToBlob(url: string){ // url to image base64
  try{
    let data = await axios.get(url, {responseType: 'arraybuffer'})
    let bufferImage = await data.data
    let imageBlob = String("data:"+'image/jpg'+";base64, "+bufferImage.toString('base64'))
    return imageBlob
  }catch(e){
    console.log('error at fetch image')
    console.log(e)
    return ''
  }
}

export default imageUrlToBlob;