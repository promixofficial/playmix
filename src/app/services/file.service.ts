import { Injectable } from '@angular/core';

import * as Ajv from 'ajv';

@Injectable()
export class FileService {

  fileContentSchema = {
    '$async': true,
    'type': 'array',
    'uniqueItems': true,
    'items': {
      'type': 'object',
      'required': ['id', 'name', 'playlist'],
      'properties': {
        'id': {'type': 'integer'},
        'name': {'type': 'string'},
        'playlist': {
          'type': 'array',
          'uniqueItems': true,
          'items': {
            'type': 'object',
            'required': ['author', 'duration', 'id', 'prettyDuration', 'title', 'url', 'available'],
            'properties': {
              'available': {'type': 'boolean'},
              'author': {'type': 'string'},
              'duration': {'type': 'integer'},
              'id': {'type': 'string'},
              'prettyDuration': {'type': 'string'},
              'title': {'type': 'string'},
              'url': {'type': 'string'}
            }
          }
        }
      }
    }
  };

  constructor() { }

  download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.click();
  }

  load(callback) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.onchange = this.readContent.bind(this, input, callback);
    input.click();
  }

  readContent(element, callback?) {
    return new Promise(resolve => {
      const file = element['files'][0],
        reader = new FileReader();

      reader.onload = function() {
        let content = reader.result;
        try {
          content = JSON.parse(content);
          callback(content)
          resolve(content);
        } catch (e) {
          callback(false)
          resolve(false);
        }
      };

      reader.readAsText(file);
    });
  }

  validateFileContent(fileContent) {
    return new Promise(resolve => {
      const ajv = Ajv({useDefaults: 'shared'}),
        schema = this.fileContentSchema,
        validate = ajv.compile(schema);
      resolve(validate(fileContent));
    })

  }
}
