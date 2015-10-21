import BaseFile from 'loader/types/BaseFile.js';

export default class JSONFile extends BaseFile {

    constructor (loader, key, url = '', data = null) {

        if (url === '' && !data)
        {
            url = key + '.json';
        }

        super(loader, key, url);

        this.type = 'text';

        this.json = null;

        if (data)
        {
            //  Already loaded!
            this.data = data;
        }

    }

    load () {

        super.load();

        this.loader.xhrLoad(this);

    }

    error () {

        super.error();

    }

    complete (xhr) {

        super.complete(xhr.responseText);

    }

    process () {

        super.process();

        //  Parse as JSON
        let data = JSON.parse(this.data);

        console.log(data);

        this.json = data;

    }

}