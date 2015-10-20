
export default class BaseLoader {

    constructor (game) {

        this.game = game;

        // this.cache

        this.resetLocked = false;

        this.isLoading = false;

        this.hasLoaded = false;

        this.crossOrigin = false;
    
        this.baseURL = '';

        this.path = '';

        this.enableParallel = true;

        this.maxParallelDownloads = 4;

        this.list = new Set();
        this.queue = new Set();

        // this._processingHead = 0;
        this._fileLoadStarted = false;
        // this._totalFileCount = 0;
        // this._loadedFileCount = 0;

    }

    addFile(file) {

        //  It's a Set so it won't allow multiple identical objects
        this.list.add(file);

    }

    start() {

        if (this.isLoading)
        {
            return;
        }

        if (this.list.size === 0)
        {
            this.hasLoaded = true;
            this.finishedLoading();
        }
        else
        {
            this.hasLoaded = false;
            this.isLoading = true;

            // this.updateProgress();

            this.processLoadQueue();
        }

    }

    processLoadQueue() {

        if (!this.isLoading)
        {
            console.warn('Phaser.Loader - active loading canceled / reset');
            this.finishedLoading(true);
            return;
        }

        for (let file of this.list)
        {
            if (!file.loading && this.queue.size <= this.maxParallelDownloads)
            {
                this.queue.add(file);

                this.list.delete(file);

                this.loadFile(file);
            }

            if (this.queue.size === this.maxParallelDownloads)
            {
                break;
            }
        }

    }

    loadFile(file) {

        console.log('BaseLoader.loadFile');

        file.load();

    }

    getURL(file) {

        console.log('getURL', file);

        if (!file.url)
        {
            return false;
        }

        if (file.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/))
        {
            return file.url;
        }
        else
        {
            return this.baseURL + file.path + file.url;
        }

        console.log('getURL OVER');

    }
    
    finishedLoading() {
        console.log('finishedLoading');
    }

}

