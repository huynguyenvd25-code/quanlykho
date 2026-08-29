function goTo(page) {
    window.location.href = page;
}

const menuItems = document.querySelectorAll(".sidebar li");
const currentPage = window.location.pathname.split("/").pop();

console.log("Current:", currentPage);

menuItems.forEach(item => {
    const page = item.dataset.page;
    console.log("Menu:", page);

    if (page === currentPage) {
        item.classList.add("active");
    }
});