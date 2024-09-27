document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    // Fungsi untuk menambahkan tugas
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Membuat elemen task item
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        // Teks task
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskItem.appendChild(taskSpan);

        // Tandai task selesai saat diklik
        taskSpan.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });

        // Tombol hapus task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        taskItem.appendChild(deleteButton);

        // Hapus task saat tombol hapus diklik
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        // Tambahkan task item ke daftar
        taskList.appendChild(taskItem);

        // Bersihkan input
        taskInput.value = "";
    }

    // Event listener untuk tombol tambah task
    addTaskButton.addEventListener("click", addTask);

    // Event listener untuk tombol enter pada input
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
