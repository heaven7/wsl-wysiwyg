Meteor.startup(() => {
    WSL = WSL || {}

    /**
     * WSL wysiwyg config and methods.
     * @namespace WSL.wysiwyg
     * @type {Object}
     */

    WSL.wysiwyg = {}

    WSL.wysiwyg.editorName = 'ckeditor'

    WSL.wysiwyg.cache = true

    WSL.wysiwyg.config = {}

    /**
     * WSL.wysiwyg.editor function
     *
     * @param selector String
     * @param editorName String optional
     * @param config Object optional
     * @example
     * WSL.wysiwyg.editor('.myclass')
     */

    WSL.wysiwyg.editor = function(selector, editorName, config) {
        var config = config || WSL.wysiwyg.config
        var editorName = editorName || WSL.wysiwyg.editorName
        switch(editorName) {
            case 'ckeditor':
                // config see: http://docs.ckeditor.com/#!/api/CKEDITOR.config
                var url = '//cdn.ckeditor.com/4.5.7/standard/ckeditor.js'
                if(window['CKEDITOR']) initCKEditor(selector, config)
                else loadScript(url, selector, editorName, config)
                break
        }
    }

    loadScript = (url, selector, editorName, config) => {
        if(url) {
            $.loadScript(url).done(function(script, textStatus) {
                if(textStatus == 'success') {
                    switch (editorName) {
                        case 'ckeditor':
                            initCKEditor(selector, config)
                            break
                    }
                }
            })
        }
    }

    initCKEditor = (selector, config) => {
        $(selector).each(function() {
            var id = $(this).attr('id')
            // re-init ckeditor instance
            if(CKEDITOR.instances[id]) CKEDITOR.instances[id].destroy()
            CKEDITOR.replace( id, config )
        })
    }

    $.loadScript = function( url, options ) {
        options = $.extend( options || {}, {
            dataType: "script",
            cache: WSL.wysiwyg.cache,
            url: url
        })
        return $.ajax( options )
    }
})
