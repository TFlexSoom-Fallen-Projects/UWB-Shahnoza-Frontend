/*
 * Tristan Hilbert
 * 4/18/2020
 * Upload Utility Functions
 * 
 */

import axios from "axios";

// https://stackoverflow.com/questions/9388412/data-uri-to-object-url-with-createobjecturl-in-chrome-ff
export function dataURItoFile(dataURI) {
    var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
       array.push(binary.charCodeAt(i));
    }
    return new File([new Uint8Array(array)], "photo-image.png", {type: mime, lastModified:Date.now()});
}

export function uploadImageToAPI(file, url, callback){
    const formData = new FormData();
    formData.append('image', file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post(url, formData, config)
        .then((res) => {
            console.log("The file is successfully uploaded: " + res);
            callback(res);
        })
        .catch((err) => {
            console.error(err);
            callback(null);
        });
}

export default {
    dataURItoFile: dataURItoFile,
    uploadImageToAPI: uploadImageToAPI
}