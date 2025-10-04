
function show_list() {
    var courses = document.getElementById("More");

    if (courses.style.display == "none") {
        courses.style.display = "block";
    } else {
        courses.style.display = "none";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        document.getElementById('More')
            .style.display = "none";
    }
}

function search_grocery() {
    let searchTerm = document.getElementById('search').value.toLowerCase();  
    const searchList = document.getElementById('searchList');
    let items = document.querySelectorAll('#searchList .dairyProduct');
    if (searchTerm !== "") {
        searchList.style.display = 'block';
    } else {
        searchList.style.display = 'none';
    }
    let anyMatch = false;
    items.forEach(item => {
        let itemName = item.textContent || item.innerText;
        if (itemName.toLowerCase().includes(searchTerm)) {
            item.style.display = 'block';
            anyMatch = true;
        } else {
            item.style.display = 'none';
        }
    });
    
    if (!anyMatch && searchTerm !== "") {
        items.forEach(item => {
            item.style.display = 'none';
        });
    }
}
function handleEnter(event) {
    if (event.key === 'Enter') {
        const firstVisibleItem = document.querySelector('#searchList .dairyProduct[style="display: block;"]');
        if (firstVisibleItem) {
            const link = firstVisibleItem.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        }
    }
}