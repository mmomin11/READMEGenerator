const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `
<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>

# ${data.title.toUpperCase()}

![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'}-brightgreen)

_Repo by ${data.name}_
__${data.desc}__

---

## Installation:
${data.inst}

## Usage:__
${data.use}

## Contributors:__
${data.con}

## Tests:__
${data.test}
`
}

module.exports = generateMarkdown;
