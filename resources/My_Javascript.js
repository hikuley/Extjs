/**
 * Created with JetBrains PhpStorm.
 * User: KuleySoft
 * Date: 4/24/13
 * Time: 7:59 PM
 * To change this template use File | Settings | File Templates.
 */
function bildirim(baslik,mesaj) {
    Ext.onReady(function () {
        Ext.create('widget.uxNotification', {
            corner: 'br',
            manager: 'instructions',
            iconCls: 'ux-notification-icon-information',
            title: baslik,
            padding:25,
            html: mesaj,
            autoDestroyDelay: 4000,
            slideInDelay: 500,
            slideDownDelay: 500,
            slideInAnimation: 'easeOut',
            slideDownAnimation: 'easeIn'
        }).show();
    });
}