import MultiFile from 'loader/types/MultiFile.js';
import ImageFile from 'loader/types/ImageFile.js';
import JSONFile from 'loader/types/JSONFile.js';

export default class AtlasJSON extends MultiFile {

    constructor (loader, key, textureURL, atlasURL, atlasData) {

        if (textureURL === '')
        {
            textureURL = key + '.png';
        }

        if (atlasURL === '' && atlasData === null)
        {
            atlasURL = key + '.json';
        }

        let image = new ImageFile(loader, key, textureURL);
        let json = new JSONFile(loader, key, atlasURL, atlasData);

        super(loader, image, json);

    }

    process () {

        if (this.hasProcessed)
        {
            return;
        }

        //  All files will have loaded by now
        console.log('AtlasJSON.process');
        console.log(this.fileA.src);
        console.log(this.fileB.src);

        super.process();

        //  Now we should have an image and parsed JSON

    }

}