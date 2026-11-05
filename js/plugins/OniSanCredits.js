/*:
 * @plugindesc Displays OniSan title-screen branding and developer credits.
 * @author Muhammad Ikhsan
 * @help Adds developer and social/contact lines beneath the game title.
 */
(function() {
    var _Scene_Title_createForeground = Scene_Title.prototype.createForeground;
    Scene_Title.prototype.createForeground = function() {
        _Scene_Title_createForeground.call(this);
        var bitmap = this._gameTitleSprite && this._gameTitleSprite.bitmap;
        if (!bitmap) return;
        bitmap.fontSize = 18;
        bitmap.textColor = '#ffffff';
        bitmap.outlineColor = 'black';
        bitmap.outlineWidth = 4;
        var credits = [
            'Pendiri dan Pengembang: Muhammad Ikhsan',
            'GitHub: github.com/nashkitwo',
            'Instagram: @ikhsan2.1',
            'Email: ican3192@gmail.com'
        ];
        var firstY = Graphics.height / 4 + 52;
        for (var i = 0; i < credits.length; i++) {
            bitmap.drawText(credits[i], 20, firstY + i * 24,
                Graphics.width - 40, 24, 'center');
        }
    };
})();
