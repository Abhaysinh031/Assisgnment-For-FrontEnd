// all the tabs and content areas
const tabs = document.querySelectorAll('.tab');
const contentSections = document.querySelectorAll('.content');
const breadcrumb = document.getElementById('breadcrumb');
const fileUpload = document.getElementById('fileUpload');
const profileImage = document.getElementById('profileImage');


// event listener to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to the clicked tab's content
        const contentId = tab.getAttribute('data-content');
        const contentToShow = document.getElementById(contentId);
        contentToShow.classList.add('active');

        
        breadcrumb.textContent = `Settings > ${tab.textContent.trim()}`;
    });
});

document.querySelector('.tab').click();


fileUpload.addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = document.getElementById(icon.dataset.target);
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});


function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    sidebar.classList.toggle('open');
    body.classList.toggle('menu-open');
}

function selectContent(contentId) {
    // Hide all content
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected content
    const target = document.getElementById(contentId);
    if (target) {
        target.classList.add('active');
    }

    // Close sidebar and remove blur
    document.querySelector('.sidebar').classList.remove('open');
    document.body.classList.remove('menu-open');
}

// Add event listeners to sidebar tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const contentId = tab.getAttribute('data-content');
        selectContent(contentId);
    });
});