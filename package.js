Package.describe({
  name: 'heaven7:wsl-wysiwyg',
  version: '0.0.1',
  summary: 'Wysiwyg package',
  git: 'https://github.com/heaven7/wsl-wysiwyg.git',
  documentation: 'README.md'
});

const both = ['client','server'],
      packages = [
      ]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages, both)
    api.imply(packages)

    api.addFiles('lib/client/wysiwyg.js', 'client')

})