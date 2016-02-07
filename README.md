### Wysiwyg package

## Installation
```
meteor add heaven7:wsl-wysiwyg
```
## Usage
Add a class to your textarea or auto-form fields
```
<textarea class="myclass"></textara>
```

```
{{> afQuickField name='description' rows=4 class="myclass"}}
```

Load Wysiwyg editor with onRendered method
```
Template.myTemplate.onRendered(() => {
    let myclass = '.myclass'
    WSL.wysiwyg.editor(myclass)
})
```