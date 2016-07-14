# stc-cdn-qiniu

stcjs cdn adapter for qiniu

# Install

```shell
npm install stc-cdn-qiniu --save-dev
```

# How to Use

in `stc.config.js` file, add:

```javascript
var cdn = require('stc-cdn');
var qiniuAdapter = require('stc-cdn-qiniu');

stc.workflow({
    cdn: {
        plugin: cdn,
        options: {
            adapter: qiniuAdapter,
            qiniu: {
                accessKey: 'your accessKey',
                secretKey: 'your secretKey',
                bucket: 'your bucket',
                origin: 'http://{bucket}.qiniudn.com'
                // timeout: 3600000, // default rpc timeout: one hour, optional
                // if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/`
                // uploadURL: 'http://up.qiniu.com/',
            },

            key: '[hash][ext]',
        }
    }
});
```

# More options

in `options.key`, canuse String or Function;

if key is string, can replace `[hash]`, `[ext]`, `[root]`, `[dir]`, `[base]`, `[name]` to real string, eg: `[hash][ext]` maybe replace to `.css`.

if key is function, can receive `params` argument, it like:

```json
{
    "hash": "9e710db6d9057b80d98f13473b0a41cc",
    "ext": ".css",
    "root": "",
    "dir": "src/",
    "base": "style.css",
    "name": "style"
}
```

The key can use the function return string;
