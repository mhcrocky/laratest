Livewire.on("deleteTriggered", (id, name) => {
    const proceed = confirm(`Are you sure you want to delete ${name}`);

    if (proceed) {
        Livewire.emit("delete", id);
    }
});
window.addEventListener('user-deleted', (event) => {
    alert(`${event.user_name} was deleted!`);
})