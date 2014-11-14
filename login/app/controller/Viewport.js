/**
 * Created with JetBrains PhpStorm.
 * User: SONY
 * Date: 21.07.2013
 * Time: 19:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Panel.controller.Viewport', {
    extend: 'Ext.app.Controller',
    views: ['viewport.Viewport', 'Loginform'],
    refs: [
        {
            ref: 'loginForm',//controlden forma ulaşmak için kullanlır
            selector: 'login_form' // formadaki alias değeri
        }
    ],
    init: function () {
        this.control({
            'login_form button[action=login]': {
                click: this.submitForm
            }
        });
        Ext.widget('panel_viewport');
    },
    submitForm: function () {
        this.getLoginForm().getForm().submit({
            url: login.oturum_ac,
            waitMsg: "Bağlanıyor . . .",
            duration: 1000,
            success: function (form, action) {

                // var sonuc = action.result.msg;
                //var durum = action.result.status;

                // oturum aç
                //durum

                if (true) {
                    window.location = "index.html";
                }
                else {
                    Ext.Msg.alert('Durum', sonuc);
                }

            },
            faulire: function () {
                Ext.Msg.alert('Hata', 'Beklenmeyen hata ile karşılaşıldı.');

            }
        });
    }
});