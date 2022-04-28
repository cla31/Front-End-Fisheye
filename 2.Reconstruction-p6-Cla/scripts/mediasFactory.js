class MediasFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new ImageMedia(data);
        } else if (type === 'video') {
            return new VideoMedia(data);
        } else {
            throw "Unknow format type";
        }
    }
}

// class MediasFactory {
//     constructor(media) {
//         if (media === "video") {
//             return new VideoMedia(media);
//         } else {
//             return new ImageMedia(media);
//         }
//     }
// }