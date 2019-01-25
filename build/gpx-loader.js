var tj = require('@mapbox/togeojson'),
    loaderUtils = require('loader-utils'),
    validateOptions = require('schema-utils'),
    // mapbox = require('mapbox-gl/dist/mapbox-gl.js'),
    // node doesn't have xml parsing or a dom. use xmldom
    DOMParser = require('xmldom').DOMParser;

var _MIN_SPEED = 1.5;

var schema = {
    "type": "object",
    "properties": {
        "name": {},
        "regExp": {},
        "context": {
            "type": "string"
        },
        "publicPath": {},
        "outputPath": {},
        "useRelativePath": {
            "type": "boolean"
        },
        "emitFile": {
            "type": "boolean"
        }
    },
    "additionalProperties": true
}


module.exports = function (source) {
    var options = loaderUtils.getOptions(this) || {};

    validateOptions(schema, options, 'GPX Loader');

    options.min_speed = options.min_speed || _MIN_SPEED;

    var gpx = new DOMParser().parseFromString(source);
    var geojson = tj.gpx(gpx);
    var info = getGpxInfos(geojson, options);

    delete geojson.features[0].properties.coordTimes;
    delete geojson.features[0].properties.time;

    var publicPath = saveFile.bind(this)(JSON.stringify(geojson), options);

    return `module.exports.info = ${JSON.stringify(info)}; module.exports.path = ${publicPath}`;
}

function saveFile(content, options) {
    var context =
        options.context ||
        this.rootContext ||
        (this.options && this.options.context);

    var url = loaderUtils.interpolateName(this, options.name, {
        context,
        content,
        regExp: options.regExp,
    });

    var outputPath = url;

    if (options.outputPath) {
        if (typeof options.outputPath === 'function') {
            outputPath = options.outputPath(url);
        } else {
            outputPath = path.posix.join(options.outputPath, url);
        }
    }

    if (options.useRelativePath) {
        const filePath = this.resourcePath;

        const issuer = options.context
            ? context
            : this._module && this._module.issuer && this._module.issuer.context;

        const relativeUrl =
            issuer &&
            path
                .relative(issuer, filePath)
                .split(path.sep)
                .join('/');

        const relativePath = relativeUrl && `${path.dirname(relativeUrl)}/`;
        // eslint-disable-next-line no-bitwise
        if (~relativePath.indexOf('../')) {
            outputPath = path.posix.join(outputPath, relativePath, url);
        } else {
            outputPath = path.posix.join(relativePath, url);
        }
    }

    let publicPath = `__webpack_public_path__ + ${JSON.stringify(outputPath)}`;

    if (options.publicPath) {
        if (typeof options.publicPath === 'function') {
            publicPath = options.publicPath(url);
        } else if (options.publicPath.endsWith('/')) {
            publicPath = options.publicPath + url;
        } else {
            publicPath = `${options.publicPath}/${url}`;
        }

        publicPath = JSON.stringify(publicPath);
    }

    // eslint-disable-next-line no-undefined
    if (options.emitFile === undefined || options.emitFile) {
        this.emitFile(outputPath, content);
    }

    return publicPath;
}

function getGpxInfos(geojson, options) {

    var feature = geojson.features[0];
    var properties = feature.properties;
    var coordinates = feature.geometry.coordinates;
    var coordTimes = properties.coordTimes;
    var trackInfo = parseTrack(coordinates, coordTimes, options);

    return {
        name: properties.name,
        elevation: trackInfo.elevation,
        duration: trackInfo.duration,
        length: trackInfo.length,
        moving_pace: trackInfo.duration.moving / (trackInfo.length / 1000),
        moving_speed: (trackInfo.length / 1000) / (trackInfo.duration.moving / (3600 * 1000)),
        total_speed: (trackInfo.length / 1000) / (trackInfo.duration.total / (3600 * 1000))
    }
}

function parseTrack(coordinates, coordTimes, options) {
    var info = {
        elevation: {
            min: Infinity,
            max: -Infinity,
            gain: 0.0,
            loss: 0.0
        },
        duration: {
            start: coordTimes[0],
            end: coordTimes[coordTimes.length - 1],
            total: 0,
            moving: 0
        },
        length: 0.0
    }

    for (var i = 0; i < coordinates.length; i++) {
        var ll = [coordinates[i][0], coordinates[i][1]];
        var ele = coordinates[i][2];

        var time = new Date('1970-01-01T00:00:00');
        if (coordTimes[i]) {
            time = new Date(Date.parse(coordTimes[i]));
        }

        if (ele > info.elevation.max) {
            info.elevation.max = ele;
        }

        if (ele < info.elevation.min) {
            info.elevation.min = ele;
        }

        if (i > 0) {
            var last = [coordinates[i - 1][0], coordinates[i - 1][1]]
            var lastEle = coordinates[i - 1][2];
            var lastTime = new Date('1970-01-01T00:00:00');
            if (coordTimes[i - 1]) {
                lastTime = new Date(Date.parse(coordTimes[i - 1]))
            }

            var dist = dist3d(last, lastEle, ll, ele)
            info.length += dist;

            var t = ele - lastEle;
            if (t > 0) {
                info.elevation.gain += t;
            } else {
                info.elevation.loss += Math.abs(t);
            }

            t = Math.abs(time - lastTime);
            var speed = (dist / 1000) / (t / (3600 * 1000))

            info.duration.total += t;
            if (/*t < options.max_point_interval &&*/ speed > 1.5) {
                info.duration.moving += t;
            }
        }
    }

    return info;
}

function dist2d(a, b) {
    var R = 6371000;
    var dLat = deg2rad(b[1] - a[1]);
    var dLon = deg2rad(b[0] - a[0]);
    var r = Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +
        Math.cos(deg2rad(a[1])) *
        Math.cos(deg2rad(b[1])) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
    var d = R * c;
    return d;
}

function dist3d(a, aEle, b, bEle) {
    var planar = dist2d(a, b);
    var height = Math.abs(bEle - aEle);
    return Math.sqrt(Math.pow(planar, 2) + Math.pow(height, 2));
}

function deg2rad(deg) {
    return deg * Math.PI / 180;
}