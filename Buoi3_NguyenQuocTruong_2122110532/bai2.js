<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quản lý môn học</title>
<style>
    #subjectList {
        list-style-type: none;
        padding: 0;
    }
    #subjectList li {
        margin-bottom: 5px;
    }
    #errorMsg {
        color: red;
        display: none;
    }
</style>
</head>
<body>
    <h2>Quản lý môn học</h2>
    <form id="addSubjectForm">
        <label for="subjectName">Tên môn học:</label>
        <input type="text" id="subjectName" required>
        <button type="submit">Thêm</button>
    </form>
    <p id="errorMsg">Vui lòng nhập tên môn học.</p>
    <ul id="subjectList"></ul>

    <script>
        document.getElementById('addSubjectForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var subjectInput = document.getElementById('subjectName');
            var subjectName = subjectInput.value.trim();
            if (subjectName !== '') {
                var subjectList = document.getElementById('subjectList');
                var newSubject = document.createElement('li');
                newSubject.textContent = subjectName;
                newSubject.innerHTML += ' <button class="deleteBtn">Xóa</button>';
                subjectList.appendChild(newSubject);
                subjectInput.value = '';
                document.getElementById('errorMsg').style.display = 'none';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
            }
        });

        document.getElementById('subjectList').addEventListener('click', function(event) {
            if (event.target.classList.contains('deleteBtn')) {
                var subjectItem = event.target.parentElement;
                subjectItem.remove();
            }
        });
    </script>
</body>
</html>
