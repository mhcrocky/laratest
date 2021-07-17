Livewire.on("deleteTriggered", (id, name) => {
    const proceed = confirm(`Are you sure you want to delete ${name}`);

    if (proceed) {
        Livewire.emit("delete", id);
    }
});

Livewire.on('user-deleted', (data) => {
    alert(`${data.user_name} was deleted!`);
})

Livewire.on("triggerCreate", () => {
    $("#user-modal").modal("show");
});


Livewire.on("user-saved", (data) => {
    $("#user-modal").modal("hide");
    alert(`User ${data.user_name} was ${data.action}!`);
});

Livewire.on("dataFetched", (user) => {
  $("#user-modal").modal("show");
});