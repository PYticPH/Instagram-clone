
// constant
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const userFeed = document.getElementById("main")

// Fetch feed data and display them
function updateFeed() {
    let content = ""

    posts.forEach(
        ({
            name,
            username,
            location,
            avatar,
            post,
            comment,
            likes
        }) => {
            // Dangerous when using user input as part of development code
            content += `
                <section class="feed">
                    <div class="op-container">
                        <img src="${avatar}" class="op-avatar" alt="Original poster avatar">
                        <div class="op-details-container">
                            <h2 class="op-name">${name}</h2>
                            <p class="op-location">${location}</p>
                        </div>
                    </div>
                    <img src="${post}" class="post" alt="Oldagram of ${name}">
                    <div class="react-container">
                        <div class="react-icons-container">
                            <img src="images/icon-heart.png" class="react-img" alt="like post">
                            <img src="images/icon-comment.png" class="react-img" alt="comment on post">
                            <img src="images/icon-dm.png" class="react-img" alt="send a message to the original poster">
                        </div>
                        <p class="likes">${likes} likes</p>
                        <p class="comment"><span class="username">${username}</span> ${comment}</p>
                    </div>
                </section>
            `
        }
    )

    // render content
    userFeed.innerHTML = content
}

updateFeed()