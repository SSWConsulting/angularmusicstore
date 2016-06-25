System.register(['@angular/core', '@angular/common', '../../models', 'angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, models_1, angular2_jwt_1;
    var AlbumTemplate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            AlbumTemplate = (function () {
                function AlbumTemplate() {
                    this.selected = new core_1.EventEmitter();
                }
                AlbumTemplate.prototype.onSelect = function (album) {
                    this.selected.next(album);
                };
                AlbumTemplate.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', models_1.Album)
                ], AlbumTemplate.prototype, "album", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', models_1.User)
                ], AlbumTemplate.prototype, "user", void 0);
                __decorate([
                    core_1.Output('selected'), 
                    __metadata('design:type', Object)
                ], AlbumTemplate.prototype, "selected", void 0);
                AlbumTemplate = __decorate([
                    core_1.Component({
                        selector: 'album-template',
                        styleUrls: [
                            'app/components/album/album-template.component.css'
                        ],
                        templateUrl: 'app/components/album/album-template.component.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumTemplate);
                return AlbumTemplate;
            }());
            exports_1("AlbumTemplate", AlbumTemplate);
        }
    }
});
