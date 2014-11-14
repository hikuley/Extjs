/**
 * Created with JetBrains PhpStorm.
 * User: hikuley
 * Date: 06.08.2013
 * Time: 17:40
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Panel.view.Loginform', {
    extend: Ext.form.Panel,
    alias: 'widget.login_form',
    title:'Kullanıcı Girişi',
    bodyPadding: 15,
    margin: 10,
    width: 300,
    defaultType: 'textfield',
    items: [
        {
            height: 30,
            fieldLabel: 'Kullanıcı Adı',
            name: 'KULLANICI_ADI',
            allowBlank: false
        },
        {

            height: 30,
            fieldLabel: 'Şifre',
            name: 'KULLANICI_SIFRE',
            allowBlank: false, // zorunlu alan
            inputType: 'password'
        }
    ],
    buttons: [
        {
            text: 'Giriş',
            action: 'login',
            formBind: true// Tüm alanlar dolmadan formu submit etmez
        }
    ]
});