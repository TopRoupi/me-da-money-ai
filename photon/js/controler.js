$(document).ready(function () {

    const app = require('electron').remote.app;
    const {
        remote
    } = require('electron');

    $('#btnKill').click(function () {
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $('#btnMax').click(function () {
        if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
            remote.BrowserWindow.getFocusedWindow().restore();
        } else {
            remote.BrowserWindow.getFocusedWindow().maximize();
        }
    });

    $('#btnMin').click(function () {
        remote.BrowserWindow.getFocusedWindow().minimize();
    });
});