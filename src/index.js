const sections = document.querySelectorAll("section");
const paragraphs = document.querySelectorAll("p");
const trash = document.getElementById("trash");

paragraphs.forEach((p) => {
    p.addEventListener("dragstart", event => {
        event.dataTransfer.setData("id", p.id);
    });

    p.addEventListener("dragend", event => {

    });
});

sections.forEach((el) => {
    el.addEventListener("dragover", event => {
        event.preventDefault();
    });

    el.addEventListener("drop", event => {
        const id = event.dataTransfer.getData("id");
        const p = document.getElementById(id);
        el.appendChild(p);
    });
});

trash.addEventListener("dragover", event => {
    event.preventDefault();
});

trash.addEventListener("drop", event => {
    const id = event.dataTransfer.getData("id");
    const p = document.getElementById(id);
    p.remove();
});
