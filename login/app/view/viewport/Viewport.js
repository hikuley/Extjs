/**
 * Created with JetBrains PhpStorm.
 * User: SONY
 * Date: 21.07.2013
 * Time: 19:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Panel.view.viewport.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.panel_viewport',
    layout: {
        type: 'vbox',
        align: 'center', // yatayda ortalar
        pack: 'center' //dikeyde ortalar
    },
    autoShow: false,
    closable: false,
    header: true,
    items: [
        {
            xtype: 'login_form'
        }
    ]
});