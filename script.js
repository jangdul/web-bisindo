function bukaVideo(jenis) {
    let container = document.getElementById("videoContainer");

    if(jenis === "abjad1") {
        container.innerHTML = `<iframe width="400" height="250"
        src="https://www.youtube.com/embed/VIDEO_ID_ABJAD1"
        allowfullscreen></iframe>`;
    } 
    else if(jenis === "abjad2") {
        container.innerHTML = `<iframe width="400" height="250"
        src="https://www.youtube.com/embed/VIDEO_ID_ABJAD2"
        allowfullscreen></iframe>`;
    } 
    else if(jenis === "angka1") {
        container.innerHTML = `<iframe width="400" height="250"
        src="https://www.youtube.com/embed/VIDEO_ID_ANGKA1"
        allowfullscreen></iframe>`;
    } 
    else if(jenis === "angka2") {
        container.innerHTML = `<iframe width="400" height="250"
        src="https://www.youtube.com/embed/VIDEO_ID_ANGKA2"
        allowfullscreen></iframe>`;
    }
    else if(jenis === "salam") {
        container.innerHTML = `<iframe width="400" height="250"
        src="https://www.youtube.com/embed/VIDEO_ID_SALAM"
        allowfullscreen></iframe>`;
    }
    else if(jenis === "perkenalan") {
        container.innerHTML = `<iframe width="400" height="250"
        src="https://www.youtube.com/embed/VIDEO_ID_PERKENALAN"
        allowfullscreen></iframe>`;
    }
}
