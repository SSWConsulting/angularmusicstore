import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Album} from '../../models';
import {AlbumService} from '../../services/album/album.service';
import {Routes} from '../../route.config';
import {AlbumSummary} from '../album/album-summary';
import {Search} from '../search/search';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.html'),
    styles: [require('./dashboard.css')],
    directives: [CORE_DIRECTIVES, AlbumSummary, Search ]
})
export class DashboardComponent implements OnInit {
    public albums: Album[] = [];
    public searching: boolean = false;

    constructor(private _albumService: AlbumService, private _router: Router) {
    }

    ngOnInit() {
       this.getPopularAlbums();
    }

    hide() {
        this.searching = true;
        alert(this.searching);
    }

    goToAlbumDetail(album: Album) {
        this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
    }

    getPopularAlbums() {
        this._albumService.getPopularAlbums()
            .subscribe(albums =>
                this.albums = albums
            );
    }
}
