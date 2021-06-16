/*! (c) Andrea Giammarchi - ISC */
if (!('insertAfter' in Node.prototype))
  Object.defineProperty(Node.prototype, 'insertAfter', {
    configurable: true,
    value(node, ref) {
      return this.insertBefore(node, ref ? ref.nextSibling : this.firstChild);
    }
  });
