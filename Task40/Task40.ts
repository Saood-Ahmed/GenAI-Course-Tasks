const make_album = (artist: string, title: string, tracks?: number) => {
    let myAlbum: {artist: string, title: string, tracks?: number} = {
        artist: artist,
        title: title
    };
    if (tracks) {
        myAlbum.tracks = tracks;
    }
    return myAlbum;
}

let saoodAlbum = make_album("Saood", "First Album");

let ashrafAlbum = make_album("Ashraf", "First Album");

let saadAlbum = make_album("Saad", "First Album", 10);

console.log(saoodAlbum);

console.log(saadAlbum);

console.log(ashrafAlbum);