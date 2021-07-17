Livewire.on("deleteTriggered", (id, name) => {
    const proceed = confirm(`Are you sure you want to delete ${name}`);

    if (proceed) {
        Livewire.emit("delete", id);
    }
});
window.addEventListener('user-deleted', (event) => {
    alert(`${event.detail.user_name} was deleted!`);
})

Livewire.on("triggerCreate", () => {
    $("#user-modal").modal("show");
});


window.addEventListener("user-saved", (event) => {
    $("#user-modal").modal("hide");
    alert(`User ${event.detail.user_name} was ${event.detail.action}!`);
});