/**
 * Created with JetBrains PhpStorm.
 * User: SONY
 * Date: 21.07.2013
 * Time: 21:18
 * To change this template use File | Settings | File Templates.
 */
Ext.define('YonetimPanel.view.viewport.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.viewport_north',
    flex: .08,
    region: 'north',
    border: false,
    style: "border-bottom:1px dotted #ededed",
    items: [
        {
            xtype: 'toolbar',
            border: false,
            items: [

            ]
        }
    ]
});