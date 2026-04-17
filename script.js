const CONFIG = {
  username: 'frosfri',
  maxRepos: 6
};

async function loadRepos() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${CONFIG.username}/repos`
    );

    const repos = await res.json();

    const grid = document.getElementById("repos-grid");

    grid.innerHTML = repos
      .slice(0, CONFIG.maxRepos)
      .map(repo => `
        <div class="repo-card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Sem descrição"}</p>
        </div>
      `)
      .join("");

  } catch (erro) {
    console.error("Erro:", erro);
  }
}

loadRepos();
