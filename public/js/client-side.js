const api_key= '278737318769733'
const cloud_name= 'drkbv4hlc'

// document.querySelector("#upload-form").addEventListener("submit", async function (e) {
//   e.preventDefault()

 
//   const signatureResponse = await router.get("/get-signature")

//   const data = new FormData()
//   data.append("file", document.querySelector("#file-field").files[0])
//   data.append("api_key", api_key)
//   data.append("signature", signatureResponse.data.signature)
//   data.append("timestamp", signatureResponse.data.timestamp)

//   const cloudinaryResponse = await router.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
//     headers: { "Content-Type": "multipart/form-data" },
//     onUploadProgress: function (e) {
//       console.log(e.loaded / e.total)
//     }
//   })
//   console.log(cloudinaryResponse.data)

//   // send the image info back to our server
//   const photoData = {
//     public_id: cloudinaryResponse.data.public_id,
//     version: cloudinaryResponse.data.version,
//     signature: cloudinaryResponse.data.signature
//   }

//   router.post("/do-something-with-photo", photoData)
// })
document.getElementById('upload').innerHTML = `
<h1> Upload widget </h1>
<div><button id="upload_widget" class="cloudinary-button">Upload files</button>
</div>

`


const myWidget = cloudinary.createUploadWidget({
  cloudName: 'my_cloud_name', 
  uploadPreset: 'Art_cart'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
