function viewMore() {
    const hiddenBlogs = document.getElementsByClassName("hide")
    const viewMoreBtn = document.getElementsByClassName("view-more")
    
    if (getComputedStyle(hiddenBlogs[0]).display === "none") {
        Array.from(hiddenBlogs).forEach(blog => blog.style.display = "inline");
        viewMoreBtn[0].textContent = "View Less"
    } else {
        Array.from(hiddenBlogs).forEach(blog => blog.style.display = "none");
        viewMoreBtn[0].textContent = "View More"
    }
}