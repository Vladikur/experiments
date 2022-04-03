import { useState } from 'react';

function YandexVision() {

  const url = 'https://vision.api.cloud.yandex.net/vision/v1/batchAnalyze'
  const IAM_TOKEN = "t1.9euelZqTnZvMkJqNjs7LlYuTzo6anu3rnpWal8eZzp6VlMaJko6PyZqbjI3l8_c9LFlt-e9MNR1y_t3z931aVm3570w1HXL-.s5sQd1DOhtMNuWtGyKvlwnTgFVGSk28fbqiMUD-GJmzmgelaIMVUbboxvN-qr5h0xynAVwywTqgm7KO6Xu1GAw"

  const [image, setImage] = useState({file: '',imageData: ''})
  
  const { file, imageData } = image

  function handleSubmit(e) {
    e.preventDefault();

    // console.log('handle uploading-', file);
    // console.log(imageData.slice(22))

    const base64 = imageData.slice(22)

    getText(base64)
    .then(res => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.statusText}`);
}

  const getText = (data) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${IAM_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "folderId": "b1ga1tiarupbpihvn8co",
        "analyze_specs": [{
          "content": `${data}`,
          "features": [{
            "type": "TEXT_DETECTION",
            "text_detection_config": {
              "language_codes": ["*"]
            }
          }]
        }]
      })
    })
    .then(checkResponse)
  }

  


  function handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        file: file,
        imageData: reader.result
      })
    }

    reader.readAsDataURL(file)
  }


  return (
  <div className="previewComponent">
    <form onSubmit={handleSubmit}>
      <input className="fileInput" type="file" onChange={handleImageChange} />
      <button className="submitButton" type="submit" onClick={handleSubmit}>Upload Image</button>
    </form>
    <div className="imgPreview">
      {
        imageData ? 
        <img className="image" src={imageData} alt='foto'/> :
        <div className="previewText">Please select an Image for Preview</div>
      }
    </div>
  </div>
  );
}

export default YandexVision;
