/**
 * Created with JetBrains PhpStorm.
 * User: SONY
 * Date: 21.07.2013
 * Time: 19:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('YonetimPanel.view.viewport.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.panel_viewport',
    layout: "border",
    autoShow: false,
    closable: false,
    header: true,
    items: [
        {
            xtype: "viewport_west"
        },
        {
            xtype: "viewport_center"
        },
        {
            xtype: "viewport_north"
        },
        {
            xtype: "viewport_south"
        },
        {
            xtype: "viewport_east"
        }
    ]

});