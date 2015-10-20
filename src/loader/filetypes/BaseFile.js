
export default class BaseFile {

    constructor (loader, key, url, data) {

        this.loader = loader;

        this.key = key;
        this.path = loader.path;
        this.url = url;
        // this.syncPoint = loader._withSyncPointDepth > 0;
        this.data = null;
        this.loading = false;
        this.loaded = false;
        this.error = false;

        this.src = '';
    }

    load() {

        console.log('BaseFile.load');

        this.loading = true;

        this.src = this.loader.getURL(this);

        console.log('getURL Result:', this.src);
    }
    
}
