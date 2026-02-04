function toggleHeart(heart) {
    if(heart.src.includes('heart.png')) {
        heart.src = 'images/filled.png';
    } else {
        heart.src = 'images/heart.png';
    }
}