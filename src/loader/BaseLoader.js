
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
        // this._fileLoadStarted = false;
        // this._totalFileCount = 0;
        // this._loadedFileCount = 0;

    }

    start () {

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

            this.queue.clear();

            // this.updateProgress();

            this.processLoadQueue();
        }

    }

    processLoadQueue () {

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

    loadFile (file) {

        file.load();

    }

    nextFile () {

        if (this.list.size > 0)
        {
            this.processLoadQueue();
        }
        else
        {
            //  Check the queue is clear
            for (let file of this.queue)
            {
                if (file.loading)
                {
                    //  If anything is still loading we bail out
                    return;
                }
            }

            this.finishedLoading();
        }

    }

    getURL (file) {

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

    }
    
    finishedLoading () {

        console.log('finishedLoading, about to start processing');

        //  process all the files
        for (let file of this.queue)
        {
            if (file.parent)
            {
                file.parent.process();
            }
            else
            {
                file.process();
            }
        }

    }

    xhrLoad (file) {

        console.log('xhrLoad', file.src);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', file.src, true);
        xhr.responseType = file.type;

        xhr.onload = () => {
            file.complete(xhr);
        };

        xhr.onerror = () => {
            file.error(xhr);
        };

        xhr.send();

    }

    parseXml (data) {

        let xml = '';

        try
        {
            if (window['DOMParser'])
            {
                var domparser = new DOMParser();
                xml = domparser.parseFromString(data, 'text/xml');
            }
            else
            {
                xml = new ActiveXObject('Microsoft.XMLDOM');
                xml.loadXML(data);
            }
        }
        catch (e)
        {
            xml = null;
        }

        if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length)
        {
            return null;
        }
        else
        {
            return xml;
        }

    }

}
