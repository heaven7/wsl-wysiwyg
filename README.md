### Wysiwyg package

## Installation
```
meteor add heaven7:wsl-wysiwyg
```
## Usage
Add a class to your textarea or auto-form fields.
Textarea needs an id attribute to work properly.
```
<textarea class="myClass" id="myId"></textara>
```
```
{{> afQuickField name='description' rows=4 class="myClass" id="myId"}}
```

Load Wysiwyg editor with onRendered method
```
Template.myTemplate.onRendered(() => {
    let myClass = '.myClass'
    let myId = '.myId'
    WSL.wysiwyg.editor(myClass) // or WSL.wysiwyg.editor(myId)
})
```