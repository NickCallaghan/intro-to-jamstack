const listRepos = async (username) => {
    const url = `https://api.github.com/users/${username}/repos?type=owner&sort=updated`;

    const repos = await fetch(url)
        .then((res) => res.json())
        .catch((error) => console.error(error));

    const markup = repos.map(
        (repo) => `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (⭐️ ${repo.stargazers_count})
        </li>`
    )
    .join('')

    const el = document.querySelector('#content')
    el.innerHTML = `<ul>${markup}</ul>`;
};

listRepos('NickCallaghan')