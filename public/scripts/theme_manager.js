function changeTheme(theme_name) {
    let new_link = document.createElement("link");
    new_link.href = `style/themes/${theme_name}.css`;
    new_link.type = "text/css";
    new_link.rel = "stylesheet";

    document.head.appendChild(new_link);

    localStorage.setItem("theme", theme_name);
}

// Load selected user theme
changeTheme(localStorage.getItem("theme") ?? "default");
