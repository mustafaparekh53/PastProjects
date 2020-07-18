import "@pnp/polyfill-ie11";
var SharePointUserPersona = (function () {
    function SharePointUserPersona(entity, result) {
        this.text = entity.DisplayText;
        this.secondaryText = entity.EntityData.Title;
        this.imageUrl = "/_layouts/15/userphoto.aspx?size=S&accountname=" + entity.Key.substr(entity.Key.lastIndexOf("|") + 1);
        this.user = result.data;
    }
    return SharePointUserPersona;
}());
export { SharePointUserPersona };

//# sourceMappingURL=OfficeUiFabricPeoplePicker.js.map
