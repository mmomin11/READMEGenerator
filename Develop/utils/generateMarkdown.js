const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `
<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="150" height="150"></a>

# ${data.title.toUpperCase()}

_Repo by ${data.name}

${data.desc}

---

## Installation:
${data.inst}

## Usage:
${data.use}

## Contributors:
${data.con}

## Badges:
![GitHub last commit](https://img.shields.io/github/last-commit/mmomin11/READMEGenerator)

## Tests:
${data.test}
`
}

module.exports = generateMarkdown;
