// @ts-nocheck

class Api {

    static getTvShows() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetTVShows",
            "params": {
                "properties": [
                    "thumbnail"
                ]
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getArtists() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetArtists",
            "params": {
                "limits": {
                    "start": 0,
                    "end": 999999
                },
                "properties":
                    [
                        "thumbnail",
                        "fanart",
                        "born",
                        "formed",
                        "died",
                        "disbanded",
                        "yearsactive",
                        "mood",
                        "style",
                        "genre"
                    ],
                "sort": {
                    "order": "ascending",
                    "method": "artist",
                    "ignorearticle": true
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getFiles(type) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetSources",
            "params": {
                "media": type
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getFilesDetails(path, type) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetFileDetails",
            "params": {
                "file": path,
                "media": type,
                "properties": ["resume"]
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getDirectory(path, type) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": path,
                "media": type,
                "properties": ["file"],
                "sort": { "order": "ascending", "method": "file" }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getGenreArtists() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetGenres",
            "params": {
                "sort": {
                    "order": "ascending",
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getGenreArtistByValue(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetArtists",
            "params": {
                "filter": {
                    "genreid": id
                },
                "limits": {
                    "start": 0,
                    "end": 999999
                },
                "properties": [
                    "thumbnail",
                    "fanart",
                    "born",
                    "formed",
                    "died",
                    "disbanded",
                    "yearsactive",
                    "mood",
                    "style",
                    "genre"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "artist",
                    "ignorearticle": true
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMoviesByTitle() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMovies",
            "params": {
                "limits": {
                    "start": 0,
                    "end": 999999
                },
                "properties": [
                    "art",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "label",
                    "ignorearticle": true
                }
            },
            "id": "libMovies"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMoviesByGenre() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetGenres",
            "params": {
                "type": "movie",
                "sort": {
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMoviesByGenreValue(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMovies",
            "params": {
                "filter": {
                    "genreid": id
                },
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "art",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "label",
                    "ignorearticle": true
                }
            },
            "id": "libMovies"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMoviesByYear() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "videodb://1/3/",
                "media": "files",
                "properties": [
                    "file"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "file"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMoviesByYearsPage(value) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMovies",
            "params": {
                "filter": {
                    "field": "year",
                    "operator": "is",
                    "value": value
                },
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "art",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "label",
                    "ignorearticle": true
                }
            },
            "id": "libMovies"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getVideoMusicByTitle() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMusicVideos",
            "params": {
                "properties": [
                    "title",
                    "thumbnail",
                    "artist",
                    "album",
                    "genre",
                    "lastplayed",
                    "year",
                    "runtime",
                    "fanart",
                    "file",
                    "streamdetails"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "artist",
                    "ignorearticle": true
                }
            },
            "id": "libMusicVideos"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getVideoPlaylists() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "special://profile/playlists/video/",
                "media": "video",
                "sort": {
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getVideoPlaylistsItems(file) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": file,
                "media": "video",
                "properties": ["artist", "album", "showtitle", "episode", "season", "title"]
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTVShowsByTitle() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetTVShows",
            "params": {
                "limits": {
                    "start": 0,
                    "end": 999999
                },
                "properties": [
                    "art",
                    "genre",
                    "plot",
                    "title",
                    "originaltitle",
                    "year",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file",
                    "fanart"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "label"
                }
            },
            "id": "libTvShows"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTvShowsSeasons(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetSeasons",
            "params": {
                "tvshowid": id,
                "properties": ["art", "season", "playcount"],
                "sort": { "method": "label" }
            },
            "id": "libSeasons"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getEpisodesList(id, tvshowid) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetEpisodes",
            "params": {
                "tvshowid": tvshowid,
                "season": id,
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "title",
                    "episode",
                    "playcount",
                    "fanart",
                    "plot",
                    "season",
                    "showtitle",
                    "thumbnail",
                    "rating"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "episode"
                }
            },
            "id": "libEps"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getVideoMusicByGenre() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetGenres",
            "params": {
                "type": "musicvideo",
                "sort": {
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static addVideoFileToPlaylist(file) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": {
                "item": {
                    "file": file
                },
                "playlistid": 1
            },
            "id": 1
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.added', "Added Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static getMusicVideoByGenreValueList(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMusicVideos",
            "params": {
                "filter": {
                    "genreid": id
                },
                "properties": [
                    "title",
                    "thumbnail",
                    "artist",
                    "album",
                    "genre",
                    "lastplayed",
                    "year",
                    "runtime",
                    "fanart",
                    "file",
                    "streamdetails"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "artist",
                    "ignorearticle": true
                }
            },
            "id": "libMusicVideos"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getVideoMusicByYear() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "videodb://3/3/",
                "media": "files",
                "properties": ["file"],
                "sort": {
                    "order": "ascending",
                    "method": "file"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMusicVideoByYearValue(label) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMusicVideos",
            "params": {
                "filter": {
                    "field": "year",
                    "operator": "is",
                    "value": label
                },
                "properties": [
                    "title",
                    "thumbnail",
                    "artist",
                    "album",
                    "genre",
                    "lastplayed",
                    "year",
                    "runtime",
                    "fanart",
                    "file",
                    "streamdetails"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "artist",
                    "ignorearticle": true
                }
            },
            "id": "libMusicVideos"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTVShowsByGenres() {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetGenres",
            "params": {
                "type": "tvshow",
                "sort": {
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTVShowsByGenresValues(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetTVShows",
            "params": {
                "filter": {
                    "genreid": id
                },
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "art",
                    "genre",
                    "plot",
                    "title",
                    "originaltitle",
                    "year",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file",
                    "fanart"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "label"
                }
            },
            "id": "libTvShows"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSourcesFilesVideo() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetSources",
            "params": { "media": "video" },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static playerOpenMusicVideo(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "musicvideoid": id
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static playerGenre(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "genreid": id
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static playerOpenFile(path) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "file": path
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static playerOpenEpisode(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "episodeid": id
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static playerOpenArtist(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "artistid": id
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static playerOpenMovieTitle(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "movieid": id
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static scanLibraryVideo() {
        const command = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "VideoLibrary.Scan"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.scanned', "Scanned Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static cleanLibraryVideo() {
        const command = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "VideoLibrary.Clean"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.cleaned', "Cleaned Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static exportLibraryVideo() {
        const command = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "VideoLibrary.Export"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.exported', "Exported Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static scanLibraryAudio() {
        const command = { "jsonrpc": "2.0", "id": 2, "method": "AudioLibrary.Scan" };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.scanned', "Scanned Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static cleanLibraryAudio() {
        const command = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "AudioLibrary.Clean"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.cleaned', "Cleaned Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static exportLibraryAudio() {
        const command = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "AudioLibrary.Export"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.exported', "Exported Successfully"));
                resolve(result);
            }).catch((error) => reject(error));
        });
    }

    static getActivePlayer() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.GetActivePlayers",
            "id": "OPAct"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getPlayerProperties(id) {
        const command = {
            "jsonrpc": "2.0",
            "id": "OPProp",
            "method": "Player.GetProperties",
            "params": {
                "playerid": id,
                "properties": [
                    "speed",
                    "shuffled",
                    "repeat",
                    "subtitleenabled",
                    "time",
                    "totaltime",
                    "position",
                    "currentaudiostream",
                    "partymode",
                    "percentage"
                ]
            }
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSeekPlayer(percentage, id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Seek",
            "params": {
                "playerid": id,
                "value": percentage,
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getPlayPause(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.PlayPause",
            "params": {
                "playerid": id
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getStop(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Stop",
            "params": { "playerid": id },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getNextPlayer(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.GoTo",
            "params": {
                "to": "next",
                "playerid": id
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getPrevPlayer(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.GoTo",
            "params": {
                "to": "previous",
                "playerid": id
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getPlayerItems(id) {
        const command = {
            "jsonrpc": "2.0",
            "id": "libNextItem",
            "method": "Playlist.GetItems",
            "params": {
                "properties": [
                    "runtime",
                    "showtitle",
                    "season",
                    "title",
                    "album",
                    "artist",
                    "duration",
                    "file"
                ],
                "playlistid": id
            }
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getEnqueuePlayer(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": {
                "item": { "movieid": id },
                "playlistid": 1
            },
            "id": "libPlaylistAdd"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.enqueued', "Enqueued Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static getTvShowsByYear() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "videodb://2/3/",
                "media": "files",
                "properties": ["file"],
                "sort": {
                    "order": "ascending",
                    "method": "file"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTVShowsByYearsPage(year) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetTVShows",
            "params": {
                "filter": {
                    "field": "year",
                    "operator": "is",
                    "value": `${year}`
                },
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "art",
                    "genre",
                    "plot",
                    "title",
                    "originaltitle",
                    "year",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file",
                    "fanart"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "label"
                }
            },
            "id": "libTvShows"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTvShowSeasons(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetSeasons",
            "params": {
                "tvshowid": id,
                "properties": ["art", "season", "playcount"],
                "sort": { "method": "label" }
            },
            "id": "libSeasons"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMusicPlaylist() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "special://profile/playlists/music/",
                "media": "music",
                "sort": { "method": "label" }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMusicPlaylistsItems(file) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": file,
                "media": "music",
                "properties": [
                    "artist",
                    "album",
                    "showtitle",
                    "episode",
                    "season",
                    "title"
                ]
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getAlbumsByTitle() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetAlbums",
            "params": {
                "limits": { "start": 0, "end": 99999 },
                "properties": [
                    "playcount",
                    "artist",
                    "genre",
                    "rating",
                    "thumbnail",
                    "year",
                    "mood",
                    "style"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "album",
                    "ignorearticle": true
                }
            },
            "id": "libAlbums"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static playerOpenAlbum(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": {
                    "albumid": id
                }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static getAlbumsBySongs(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongs",
            "params": {
                "filter": {
                    "albumid": id
                },
                "limits": {
                    "start": 0,
                    "end": 999999
                },
                "properties": [
                    "artist",
                    "duration",
                    "album",
                    "track"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "track",
                    "ignorearticle": true
                }
            },
            "id": "libSongs"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static playerOpenAlbumSong(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": {
                "item": { "songid": id }
            },
            "id": "libPlayerOpen"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.played', "Played Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static addSongToPlaylist(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": {
                "item": { "songid": id },
                "playlistid": 0
            },
            "id": "libPlaylistAdd"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then((result) => {
                Utils.getNotifications(Translation.get('alert.added', "Added Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static getAlbumsByGenre() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetGenres",
            "params": {
                "sort": {
                    "order": "ascending",
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getAlbumsByYears() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "musicdb://9/",
                "media": "files",
                "properties": ["file"],
                "sort": {
                    "order": "ascending",
                    "method": "file"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getAlbumsByYearsPage(year) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetAlbums",
            "params": {
                "filter": {
                    "field": "year",
                    "operator": "is",
                    "value": year
                },
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "playcount",
                    "artist",
                    "genre",
                    "rating",
                    "thumbnail",
                    "year",
                    "mood",
                    "style"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "album",
                    "ignorearticle": true
                }
            },
            "id": "libAlbums"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getAlbumsYearsPageSongs(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongs",
            "params": {
                "filter": { "albumid": id },
                "limits": { "start": 0, "end": 999999 },
                "properties": [
                    "artist",
                    "duration",
                    "album",
                    "track"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "track",
                    "ignorearticle": true
                }
            },
            "id": "libSongs"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getAlbumsByGenrePage(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetAlbums",
            "params": {
                "filter": {
                    "genreid": id
                },
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "playcount",
                    "artist",
                    "genre",
                    "rating",
                    "thumbnail",
                    "year",
                    "mood",
                    "style"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "album",
                    "ignorearticle": true
                }
            },
            "id": "libAlbums"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static addAlbumTitleEnqueue(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": {
                "item": { "albumid": id },
                "playlistid": 0
            },
            "id": "libPlaylistAdd"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then(result => {
                Utils.getNotifications(Translation.get('alert.added', "Added Successfully"));
                resolve(result);
            }).catch(erro => reject(error));
        });
    }

    static getAlbumTitleDetails(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetAlbumDetails",
            "params": {
                "albumid": id,
                "properties": [
                    "playcount",
                    "rating",
                    "artist",
                    "thumbnail",
                    "description",
                    "title",
                    "genre",
                    "theme",
                    "mood",
                    "style",
                    "type",
                    "albumlabel",
                    "year",
                    "musicbrainzalbumid",
                    "musicbrainzalbumartistid",
                    "fanart"
                ]
            },
            "id": "libAlbumDets"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSongsByTitle() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongs",
            "params": {
                "limits": {
                    "start": 0,
                    "end": 99999
                },
                "properties": [
                    "artist",
                    "duration",
                    "album",
                    "track"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "track",
                    "ignorearticle": true
                }
            },
            "id": "libSongs"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSongsByArtist() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetArtists",
            "params": {
                "limits": { "start": 0, "end": 99999 },
                "properties": [
                    "thumbnail",
                    "fanart",
                    "born",
                    "formed",
                    "died",
                    "disbanded",
                    "yearsactive",
                    "mood",
                    "style",
                    "genre"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "artist",
                    "ignorearticle": true
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSongsByArtistItems(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongs",
            "params": {
                "filter": { "artistid": id },
                "limits": { "start": 0, "end": 999999 },
                "properties": [
                    "artist",
                    "duration",
                    "album",
                    "track"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "track",
                    "ignorearticle": true
                }
            },
            "id": "libSongs"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static addArtistToPlaylist(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": {
                "item": { "artistid": id },
                "playlistid": 0
            },
            "id": "libPlaylistAdd"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then(result => {
                Utils.getNotifications(Translation.get('alert.added', "Added Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static getSongsByGenre() {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetGenres",
            "params": {
                "sort": {
                    "order": "ascending",
                    "method": "label"
                }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSongsByGenreItems(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongs",
            "params": {
                "filter": { "genreid": id },
                "limits": { "start": 0, "end": 999999 },
                "properties": ["artist", "duration", "album", "track"],
                "sort": { "order": "ascending", "method": "track", "ignorearticle": true }
            },
            "id": "libSongs"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSongGenreInformation(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongDetails",
            "params": {
                "songid": id,
                "properties": [
                    "title",
                    "artist",
                    "albumartist",
                    "genre",
                    "year",
                    "rating",
                    "album",
                    "track",
                    "duration",
                    "comment",
                    "lyrics",
                    "musicbrainztrackid",
                    "musicbrainzartistid",
                    "musicbrainzalbumid",
                    "musicbrainzalbumartistid",
                    "playcount",
                    "fanart",
                    "thumbnail",
                    "file",
                    "albumid",
                    "lastplayed",
                    "disc"
                ]
            },
            "id": "libSongDets"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static addEnqueueGenre(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": { "item": { "genreid": id }, "playlistid": 0 },
            "id": "libPlaylistAdd"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then(result => {
                Utils.getNotifications(Translation.get('alert.added', "Added Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static addEnqueueGenreVideo(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Playlist.Add",
            "params": { "item": { "genreid": id }, "playlistid": 1 },
            "id": "libPlaylistAdd"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then(result => {
                Utils.getNotifications(Translation.get('alert.added', "Added Successfully"));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static getSongsByYears() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Files.GetDirectory",
            "params": {
                "directory": "musicdb://9/",
                "media": "files",
                "properties": ["file"],
                "sort": { "order": "ascending", "method": "file" }
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSongsByYearsItems(year) {
        const command = {
            "jsonrpc": "2.0",
            "method": "AudioLibrary.GetSongs",
            "params": {
                "filter": {
                    "field": "year",
                    "operator": "is",
                    "value": year
                },
                "limits": { "start": 0, "end": 999999 },
                "properties": [
                    "artist",
                    "duration",
                    "album",
                    "track"
                ],
                "sort": {
                    "order": "ascending",
                    "method": "track",
                    "ignorearticle": true
                }
            },
            "id": "libSongs"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getTVShowDetails(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetTVShowDetails",
            "params": {
                "tvshowid": id,
                "properties": [
                    "art",
                    "votes",
                    "premiered",
                    "cast",
                    "tag",
                    "genre",
                    "plot",
                    "title",
                    "originaltitle",
                    "year",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "file",
                    "fanart",
                    "episode"
                ]
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static setVolume(volume) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Application.SetVolume",
            "params": { "volume": volume },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getVolume() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Application.GetProperties",
            "params": {
                "properties": ["volume", "muted"]
            },
            "id": "OAppVol"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static setMute(value) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Application.SetMute",
            "params": {
                "mute": value
            },
            "id": 1
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSettingsSections() {
        const command = {
            "jsonrpc": "2.0",
            "method": "Settings.GetSections",
            "params": {
                "level": "expert"
            },
            "id": "libGetSettingsSections"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSettingsCategories(section) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Settings.GetCategories",
            "params": {
                "section": section,
                "level": "expert"
            },
            "id": "libGetSettingsCategories"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getSettings(section, category) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Settings.GetSettings",
            "params": {
                "filter": {
                    "section": section,
                    "category": category
                },
                "level": "expert"
            },
            "id": "libGetSettingsSections"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static setSettingValue(id, value) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Settings.SetSettingValue",
            "params": {
                "setting": id,
                "value": value
            },
            "id": "libSetSettingValue"
        };
        return new Promise((resolve, reject) => {
            Xbmc.send(JSON.stringify(command)).then(result => {
                Utils.getNotifications(Translation.get('aleret.saved', 'Saved Successfully'));
                resolve(result);
            }).catch(error => reject(error));
        });
    }

    static getAddons(type) {
        const command = {
            "jsonrpc": "2.0",
            "method": "Addons.GetAddons",
            "params": {
                "enabled": true,
                "content": "unknown",
                "type": type,
                "properties": ["name", "thumbnail", "version", "author"]
            },
            "id": "libAddons"
        };
        return Xbmc.send(JSON.stringify(command));
    }

    static getMovieDetails(id) {
        const command = {
            "jsonrpc": "2.0",
            "method": "VideoLibrary.GetMovieDetails",
            "params": {
                "movieid": id,
                "properties": [
                    "art",
                    "genre",
                    "director",
                    "plot",
                    "title",
                    "tag",
                    "originaltitle",
                    "runtime",
                    "year",
                    "rating",
                    "thumbnail",
                    "playcount",
                    "trailer",
                    "cast",
                    "resume",
                    "file",
                    "tagline",
                    "set",
                    "setid",
                    "lastplayed",
                    "studio",
                    "mpaa",
                    "votes",
                    "streamdetails",
                    "writer",
                    "fanart",
                    "imdbnumber"
                ]
            },
            "id": 2
        };
        return Xbmc.send(JSON.stringify(command));
    }
}