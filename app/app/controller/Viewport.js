/**
 * Created with JetBrains PhpStorm.
 * User: SONY
 * Date: 21.07.2013
 * Time: 19:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('YonetimPanel.controller.Viewport', {
    extend: 'Ext.app.Controller',
    views: [
        "viewport.Viewport",
        "viewport.West",
        "viewport.Center",
        "viewport.North",
        "viewport.South",
        "viewport.East"

    ],
    init: function () {
        Ext.widget('panel_viewport');
    }
});