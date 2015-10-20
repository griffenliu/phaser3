import BaseFile from 'loader/filetypes/BaseFile.js';

export default class Image extends BaseFile {

    constructor (loader, key, url) {

        super(loader, key, url);

        // console.log('Image created', this);

    }
    
    load () {

        super.load();

        console.log('Image.load taking over');

        this.data = new window.Image();
        this.data.name = this.key;

        if (this.loader.crossOrigin)
        {
            this.data.crossOrigin = this.loader.crossOrigin;
        }

        this.data.onload = () => {
            console.log('image onload', this);
            this.data.onload = null;
            this.data.onerror = null;
            this.complete();
        };

        // this.data.onload = function () {
        //     if (this.data.onload)
        //     {
        //         this.data.onload = null;
        //         this.data.onerror = null;
        //         _this.fileComplete(file);
        //     }
        // };

        // file.data.onerror = function () {
        //     if (file.data.onload)
        //     {
        //         file.data.onload = null;
        //         file.data.onerror = null;
        //         _this.fileError(file);
        //     }
        // };

        // console.log('src', src);

        this.data.src = this.src;

        // Image is immediately-available/cached
        // if (file.data.complete && file.data.width && file.data.height)
        // {
        //     file.data.onload = null;
        //     file.data.onerror = null;
        //     this.fileComplete(file);
        // }


    }

    complete() {

        this.loading = false;
        this.loaded = true;

        console.log('Image.complete', this);

        document.body.appendChild(this.data);

    }

}