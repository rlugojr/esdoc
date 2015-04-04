import assert from './Util/assert.js';

describe('MyClassX:', ()=>{
  let db = global.db;

  it('has optional doc annotation for class.', ()=>{
    let docs = db.find({name: 'MyClassX'});
    assert.equal(docs.length, 1);
    assert.doc(docs[0],
    {
      "kind": "class",
      "static": true,
      "variation": null,
      "name": "MyClassX",
      "memberof": "src/MyClassX.js",
      "longname": "src/MyClassX.js~MyClassX",
      "access": null,
      "export": true,
      "importPath": "esdoc-test-fixture/src/MyClassX.js",
      "importStyle": "MyClassX",
      "description": "this is MyClassX desc.",
      "lineNumber": 12,
      "deprecated": "use MyClassXX instead of this class.",
      "since": "0.0.1",
      "version": "1.2.3",
      "todo": [
        "this is MyClassX todo1.",
        "this is MyClassX todo2."
      ],
      "ignore": true,
      "interface": false,
      "implements": [
        "InterfaceX",
        "InterfaceY"
      ]
    });
  });

  it('has optional doc annotation for method.', ()=>{
    let docs = db.find({longname: 'src/MyClassX.js~MyClassX#method'});
    assert.equal(docs.length, 1);
    assert.doc(docs[0],
    {
      "kind": "method",
      "static": false,
      "variation": null,
      "name": "method",
      "memberof": "src/MyClassX.js~MyClassX",
      "longname": "src/MyClassX.js~MyClassX#method",
      "access": null,
      "description": "this is MyClassX#method desc.",
      "lineNumber": 25,
      "experimental": "this method is dangerous.",
      "abstract": true,
      "override": true,
      "throws": [
        {
          "types": [
            "ErrorX"
          ],
          "description": "this is throws ErrorX desc."
        },
        {
          "types": [
            "ErrorY"
          ],
          "description": "this is throws ErrorY desc."
        }
      ],
      "fires": [
        {
          "types": [
            "EventX"
          ],
          "description": "this is fires EventX desc."
        },
        {
          "types": [
            "EventY"
          ],
          "description": "this is fires EventY desc."
        }
      ],
      "listens": [
        {
          "types": [
            "EventX"
          ],
          "description": "this is listens EventX desc."
        },
        {
          "types": [
            "EventY"
          ],
          "description": "this is listens EventY desc."
        }
      ]
    });
  });
});