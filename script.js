const createPost = (title, paragraph) => {

    // 1. Target the container
    const postsContainer = document.getElementById("all-posts-container");

    // 2. Create the new parent card wrapper
    const postWrapper = document.createElement("div");
    postWrapper.classList.add("blog-post");

    // 3. Create the title
    const titlePost = document.createElement("h2");
    titlePost.classList.add("post-title");
    titlePost.textContent = title;

    // Create Edit Title button
    const buttonEditTitle = document.createElement("button");
    buttonEditTitle.textContent = "Edit Title";

    buttonEditTitle.addEventListener("click", (e) => {
        editTitle(e.target.parentElement);
    });

    titlePost.appendChild(buttonEditTitle);


    // 4. Create the paragraph
    const paragraphPost = document.createElement("p");
    paragraphPost.textContent = paragraph;


    // Create Edit Content button
    const buttonEditContent = document.createElement("button");
    buttonEditContent.textContent = "Edit Content";

    buttonEditContent.addEventListener("click", (e) => {
        editPost(e.target);
    });


    // Create Delete button
    const buttonDeletePost = document.createElement("button");
    buttonDeletePost.textContent = "Delete Post";

    buttonDeletePost.addEventListener("click", (e) => {
        deletePost(e.target);
    });


    // 5. Append everything to the post wrapper
    postWrapper.appendChild(titlePost);
    postWrapper.appendChild(paragraphPost);
    postWrapper.appendChild(buttonEditContent);
    postWrapper.appendChild(buttonDeletePost);
    // 6. Add the post to the container
    postsContainer.appendChild(postWrapper);
};


// Delete Post
const deletePost = (button) => {

    const postWrapper = button.parentElement;
    const title = postWrapper.querySelector(".post-title").firstChild.textContent;

    const toDelete = confirm(
        `Are you sure you want to delete "${title}"?`
    );

    if (toDelete) {
        postWrapper.remove();

        alert(`Post "${title}" deleted successfully`);
    }
};


// Edit Paragraph
const editPost = (button) => {

    const postWrapper = button.parentElement;
    const paragraph = postWrapper.querySelector("p");

    const newPost = prompt(
        "Input new content:",
        paragraph.textContent
    );

    if (newPost !== null) {
        paragraph.textContent = newPost;
    }
};


// Edit Title
const editTitle = (titleElement) => {

    const currentTitle = titleElement.firstChild.textContent;

    const newTitle = prompt(
        "Input a new title:",
        currentTitle
    );

    if (newTitle !== null && newTitle.trim() !== "") {

        // Change only the title text
        titleElement.firstChild.textContent = newTitle;
    }
};


// Add Post
const addPost = () => {

    const getTitle = prompt("Enter title of the post.");
    const getParagraph = prompt("Write your sentences here.");

    if (
        getTitle !== null &&
        getParagraph !== null
    ) {
        createPost(getTitle, getParagraph);
    }
};


window.onload = () => {

    const titleList = [
        "Welcome to My Blog",
        "Web Development Tips",
        "Learning JavaScript"
    ];

    const paragraphList = [
        "This is my first blog post. I'm excited to share my thoughts and experiences with you all!!",
        "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary.",
        "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."
    ];


    // Create the default posts
    for (let i = 0; i < titleList.length; i++) {
        createPost(titleList[i], paragraphList[i]);
    }

    // Add Blog Post button
    const addBlogBtn = document.getElementById("add-post");
    addBlogBtn.addEventListener("click", addPost);
};

