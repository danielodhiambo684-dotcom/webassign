
document.getElementById('showSignup')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('showLogin')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
});

document.querySelectorAll('form').forEach(form => {
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'home.html';
  });
});

const searchBar = document.getElementById('searchBar');
const dropdown = document.getElementById('searchDropdown');

searchBar?.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!searchBar?.contains(e.target) && !dropdown?.contains(e.target)) {
    dropdown?.classList.remove('active');
  }
});

function viewProperty(id) {
  window.location.href = 'property.html';
}