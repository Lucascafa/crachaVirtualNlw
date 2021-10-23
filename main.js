const linksSocialMedia = {
  github: 'Lucascafa',
  instagram: 'lucascafa_',
  linkedin: 'in/lucas-cafarelli-viana-bb023717a',
  facebook: 'LucasCafarelliViana'
}

function changeSocialMediaLinks() {
  //userName /*id do h1*/.textContent /*acessar o conteúdo de texto*/ = 'Lucas Cafarelli Viana'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') //social - Só existe enquanto o for estiver sendo feito - Variável de escopo
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
