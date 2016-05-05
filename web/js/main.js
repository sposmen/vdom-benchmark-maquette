'use strict';

var benchmark = require('vdom-benchmark-base');
var maquette = require('maquette');

var h = maquette.h;

var NAME = 'maquette';
var VERSION = '2.3.2';

function convertToVnode(node) {
  if (node.children) {
    return h("div", {key:node.key}, node.children.map(convertToVnode));
  } else {
//    return { vnodeSelector: "span", properties: { key: node.key }, children: [{ vnodeSelector: "", text: node.key, domNode: null }], domNode: null };
    return h("span", {key:node.key}, [node.key]);
  }
}

function BenchmarkImpl(container, a, b) {
  this.container = container;
  this.a = a;
  this.b = b;
  this.projection = null;
}

BenchmarkImpl.prototype.setUp = function() {
};

BenchmarkImpl.prototype.tearDown = function() {
  this.projection.update(h("div.container", []));
};

BenchmarkImpl.prototype.render = function() {
  this.projection = maquette.dom.create(h("div.container", this.a.map(convertToVnode)));
  this.container.appendChild(this.projection.domNode);
};

BenchmarkImpl.prototype.update = function() {
  this.projection.update(h("div.container", this.b.map(convertToVnode)));
};

document.addEventListener('DOMContentLoaded', function(e) {
  benchmark(NAME, VERSION, BenchmarkImpl);
}, false);
