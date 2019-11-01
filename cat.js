
function run() {
    var index = Math.floor(Math.random() * 10);
    return getCat(index);
}

function getCat(index){
    var stockImageArr = [
        "https://media.gettyimages.com/photos/lovely-kitten-on-sleeping-picture-id855294700?s=2048x2048",
        "https://media.gettyimages.com/photos/cat-playing-with-boxes-and-toys-picture-id928511654?s=2048x2048",
        "https://media.gettyimages.com/photos/afraid-picture-id154955811?s=2048x2048",
        "https://media.gettyimages.com/photos/it-was-a-delicious-lunch-picture-id185063269?s=2048x2048",
        "https://media.gettyimages.com/photos/portrait-of-siberian-kitten-studio-shoot-picture-id936350406?s=2048x2048",
        "https://media.gettyimages.com/photos/portrait-of-sphynx-cat-on-table-wearing-pink-pullover-and-funny-picture-id900255944?s=2048x2048",
        "https://media.gettyimages.com/photos/scottish-fold-playing-picture-id1127317526?s=2048x2048",
        "https://media.gettyimages.com/photos/me-please-picture-id172259096?s=2048x2048",
        "https://media.gettyimages.com/photos/all-paws-down-im-the-cutest-picture-id859654404?s=2048x2048",
        "https://media.gettyimages.com/photos/highland-lynx-kitten-picture-id183882515?s=2048x2048"
    ]
    return stockImageArr[index];
}