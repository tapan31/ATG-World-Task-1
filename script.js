const signInForm = document.getElementById("signInForm");
const createAccountForm = document.getElementById("createAccountForm");
const toggleBtn = document.getElementById("toggleBtn");
const formTitle = document.getElementById("formTitle");
const joinBtn = document.getElementById("joinBtn");

const toggleBtnMobile = document.getElementById("toggleBtnMobile");
const createAccountBtnMobile = document.getElementById(
  "createAccountBtnMobile"
);
const signInFormMobile = document.getElementById("signInFormMobile");
const createAccountFormMobile = document.getElementById(
  "createAccountFormMobile"
);
const formTitleMobile = document.getElementById("formTitleMobile");
const closeBtn = document.getElementById("closeBtn");
const editBtn = document.getElementById("editBtn");
const dropDownMenu = document.getElementById("dropDownMenu");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (signInForm.style.display === "block") {
    signInForm.style.display = "none";
    createAccountForm.style.display = "block";
    formTitle.innerText = "Create Account";
  } else {
    signInForm.style.display = "block";
    createAccountForm.style.display = "none";
    formTitle.innerText = "Sign In";
  }
});

joinBtn.addEventListener("click", function () {
  if (joinBtn.classList.contains("join-group")) {
    joinBtn.classList.remove("join-group");
    joinBtn.innerText = "Leave Group";
  } else {
    joinBtn.classList.add("join-group");
    joinBtn.innerText = "Join Group";
  }
});

toggleBtnMobile.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("click");
  if (signInFormMobile.style.display === "block") {
    signInFormMobile.style.display = "none";
    createAccountFormMobile.style.display = "block";
    formTitleMobile.innerText = "Create Account";
  } else {
    signInFormMobile.style.display = "block";
    createAccountFormMobile.style.display = "none";
    formTitleMobile.innerText = "Sign In";
  }
});

createAccountBtnMobile.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("click");
  if (signInFormMobile.style.display === "block") {
    signInFormMobile.style.display = "none";
    createAccountFormMobile.style.display = "block";
    formTitleMobile.innerText = "Create Account";
  } else {
    signInFormMobile.style.display = "block";
    createAccountFormMobile.style.display = "none";
    formTitleMobile.innerText = "Sign In";
  }
});

closeBtn.addEventListener("click", function () {
  document.querySelector(".mobile-modal").classList.toggle("active");
});

editBtn.addEventListener("click", function () {
  document.querySelector(".mobile-modal").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with the class 'dropdown-toggle-button'
  const dropdownToggleButtons = document.querySelectorAll(
    ".dropdown-toggle-btn"
  );

  // Add click event listener to each button
  dropdownToggleButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      // Get the target dropdown menu ID from the 'data-target' attribute
      const targetDropdownId = button.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetDropdownId);

      // Toggle the 'show' class for the corresponding dropdown menu
      targetDropdown.classList.toggle("show");

      e.stopPropagation();
    });
  });

  document.addEventListener("click", function () {
    // Close all dropdowns when clicking outside
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  });
});
